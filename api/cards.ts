import { json, readCard, validId, writeCard } from './_storage';

export async function POST(request: Request) {
  try {
    // Vercel serverless requests have size limits; reject oversized cards.
    const len = Number(request.headers.get('content-length') || 0);
    if (len > 3_500_000) return json({ success: false, error: 'payload too large' }, 413);
    const body = await request.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ success: false, error: 'invalid body' }, 400);
    const cardId = body.id || `card_${Date.now()}`;
    if (typeof cardId !== 'string' || !validId(cardId) || cardId === 'latest') return json({ success: false, error: 'invalid card id' }, 400);
    const existing = (await readCard(cardId)) || {};
    // Preserve fields omitted by partial photo/config saves.
    const card = { ...existing, ...body, id: cardId, updatedAt: Date.now() };
    if (JSON.stringify(card).length > 3_500_000) return json({ success: false, error: 'card too large' }, 413);
    await writeCard(cardId, card);
    // Existing UI expects the most recently saved card at /api/cards/latest.
    await writeCard('latest', card);
    return json({ success: true, id: cardId, card });
  } catch (error) {
    console.error('POST /api/cards failed:', error);
    return json({ success: false, error: 'card storage failed' }, 500);
  }
}
