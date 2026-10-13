import { get, put } from '@vercel/blob';

// Vercel Blob automatically uses project OIDC credentials on Vercel.
const cardPath = (id: string) => `cards/${id}.json`;
export function validId(id: string) { return /^[a-zA-Z0-9_-]{1,100}$/.test(id); }
export function json(data: unknown, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}
export async function readCard(id: string): Promise<Record<string, any> | null> {
  const blob = await get(cardPath(id), { access: 'private', useCache: false });
  if (!blob) return null;
  return JSON.parse(await new Response(blob.stream).text());
}
export async function writeCard(id: string, data: Record<string, any>) {
  await put(cardPath(id), JSON.stringify(data), {
    access: 'private', contentType: 'application/json', allowOverwrite: true,
  });
}
