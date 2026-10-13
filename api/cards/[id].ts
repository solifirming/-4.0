import { json, readCard, validId } from '../_storage';
export async function GET(request: Request) {
  const id = new URL(request.url).pathname.split('/').pop() || '';
  if (!validId(id)) return json({ success: false, error: 'invalid card id' }, 400);
  try { return json({ success: true, card: await readCard(id) }); }
  catch (error) { console.error('GET card failed', error); return json({ success: false, error: 'card read failed' }, 500); }
}
