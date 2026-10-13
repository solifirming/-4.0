import { get } from '@vercel/blob';

type ApiRequest = { method?: string };
type ApiResponse = { status(code: number): ApiResponse; setHeader(name: string, value: string): void; json(value: unknown): void };
export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ success: false, error: 'method not allowed' });
  try {
    const blob = await get('cards/latest.json', { access: 'private', useCache: false });
    const card = blob ? JSON.parse(await new Response(blob.stream).text()) : null;
    return res.status(200).json({ success: true, card });
  } catch (error) {
    console.error('GET /api/cards/latest failed:', error);
    return res.status(500).json({ success: false, error: 'card read failed' });
  }
}
