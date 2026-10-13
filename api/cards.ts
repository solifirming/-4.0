import { get, put } from '@vercel/blob';

const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
const validId = (id: string) => /^[a-zA-Z0-9_-]{1,100}$/.test(id);
async function readCard(id: string): Promise<Record<string, unknown> | null> {
  const blob = await get(`cards/${id}.json`, { access: 'private' });
  return blob ? JSON.parse(await new Response(blob.stream).text()) : null;
}
async function writeCard(id: string, card: Record<string, unknown>) {
  await put(`cards/${id}.json`, JSON.stringify(card), {
    access: 'private', contentType: 'application/json', allowOverwrite: true,
  });
}
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return json({ success: false, error: 'method not allowed' }, 405);
  try {
    if (Number(request.headers.get('content-length') || 0) > 3_500_000)
      return json({ success: false, error: 'payload too large' }, 413);
    const body: unknown = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body))
      return json({ success: false, error: 'invalid body' }, 400);
    const input = body as Record<string, unknown>;
    const id = input.id || `card_${Date.now()}`;
    if (typeof id !== 'string' || !validId(id) || id === 'latest')
      return json({ success: false, error: 'invalid card id' }, 400);
    const existing = (await readCard(id)) || {};
    const card = { ...existing, ...input, id, updatedAt: Date.now() };
    if (JSON.stringify(card).length > 3_500_000)
      return json({ success: false, error: 'card too large' }, 413);
    await writeCard(id, card);
    await writeCard('latest', card);
    return json({ success: true, id, card });
  } catch (error) {
    console.error('POST /api/cards failed:', error);
    return json({ success: false, error: 'card storage failed' }, 500);
  }
}
