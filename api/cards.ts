import { get, put } from '@vercel/blob';

type ApiRequest = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> };
type ApiResponse = { status(code: number): ApiResponse; setHeader(name: string, value: string): void; json(value: unknown): void };
const validId = (id: string) => /^[a-zA-Z0-9_-]{1,100}$/.test(id);
const pathFor = (id: string) => `cards/${id}.json`;
async function readCard(id: string): Promise<Record<string, unknown> | null> {
  const blob = await get(pathFor(id), { access: 'private', useCache: false });
  return blob ? JSON.parse(await new Response(blob.stream).text()) : null;
}
async function writeCard(id: string, card: Record<string, unknown>) {
  await put(pathFor(id), JSON.stringify(card), {
    access: 'private', contentType: 'application/json', allowOverwrite: true,
  });
}
export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'method not allowed' });
  try {
    const rawLength = req.headers['content-length'];
    const length = Number(Array.isArray(rawLength) ? rawLength[0] : rawLength || 0);
    if (length > 3_500_000) return res.status(413).json({ success: false, error: 'payload too large' });
    let body: unknown = req.body;
    if (typeof body === 'string') body = JSON.parse(body);
    if (!body || typeof body !== 'object' || Array.isArray(body))
      return res.status(400).json({ success: false, error: 'invalid body' });
    const input = body as Record<string, unknown>;
    const id = input.id || `card_${Date.now()}`;
    if (typeof id !== 'string' || !validId(id) || id === 'latest')
      return res.status(400).json({ success: false, error: 'invalid card id' });
    const existing = await readCard(id) || {};
    const card = { ...existing, ...input, id, updatedAt: Date.now() };
    if (JSON.stringify(card).length > 3_500_000)
      return res.status(413).json({ success: false, error: 'card too large' });
    await writeCard(id, card);
    await writeCard('latest', card);
    return res.status(200).json({ success: true, id, card });
  } catch (error) {
    console.error('POST /api/cards failed:', error);
    return res.status(500).json({ success: false, error: 'card storage failed' });
  }
}
