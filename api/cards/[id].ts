import { get } from '@vercel/blob';
export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'GET')
    return Response.json({ success: false, error: 'method not allowed' }, { status: 405 });
  const id = new URL(request.url).pathname.split('/').pop() || '';
  if (!/^[a-zA-Z0-9_-]{1,100}$/.test(id))
    return Response.json({ success: false, error: 'invalid card id' }, { status: 400 });
  try {
    const blob = await get(`cards/${id}.json`, { access: 'private' });
    const card = blob ? JSON.parse(await new Response(blob.stream).text()) : null;
    return Response.json({ success: true, card }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('GET card failed:', error);
    return Response.json({ success: false, error: 'card read failed' }, { status: 500 });
  }
}
