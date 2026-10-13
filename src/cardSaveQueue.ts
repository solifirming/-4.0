// Serializes writes to the same card so an older request cannot finish last.
const pending = new Map<string, Promise<void>>();
export function enqueueCardSave(id: string, payload: Record<string, unknown>): Promise<void> {
  const previous = pending.get(id) || Promise.resolve();
  const job = previous.catch(() => {}).then(async () => {
    const res = await fetch('/api/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`POST /api/cards HTTP ${res.status}: ${(await res.text()).slice(0,300)}`);
    const result = await res.json();
    if (!result?.success) throw new Error('POST /api/cards returned success=false');
  });
  pending.set(id, job);
  void job.finally(() => { if (pending.get(id) === job) pending.delete(id); }).catch(() => {});
  return job;
}
