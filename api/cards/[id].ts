import { get } from '@vercel/blob';

type ApiRequest = { method?: string; query?: Record<string, string | string[] | undefined>; url?: string };
type ApiResponse = { status(code: number): ApiResponse; setHeader(name: string, value: string): void; json(value: unknown): void };
export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'method not allowed' });
  const queryId = req.query?.id;
  const id = (Array.isArray(queryId) ? queryId[0] : queryId) || (req.url?.split('?')[0].split('/').pop() ?? '');
  if (!/^[a-zA-Z0-9_-]{1,100}$/.test(id))
    return res.status(400).json({ success: false, error: 'invalid card id' });
  try {
    const blob = await get(`cards/${id}.json`, { access: 'private' });
    const card = blob ? JSON.parse(await new Response(blob.stream).text()) : null;
    return res.status(200).json({ success: true, card });
  } catch (error) {
    console.error('GET /api/cards/[id] failed:', error);
    return res.status(500).json({ success: false, error: 'card read failed' });
  }
}
