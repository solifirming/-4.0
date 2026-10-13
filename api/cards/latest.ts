import { json, readCard } from '../_storage';
export async function GET() {
  try { return json({ success: true, card: await readCard('latest') }); }
  catch (error) { console.error('GET latest failed', error); return json({ success: false, error: 'card read failed' }, 500); }
}
