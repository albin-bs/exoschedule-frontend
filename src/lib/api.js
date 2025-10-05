export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000';

export async function fetchSchedule(n = 10) {
  const r = await fetch(`${API_BASE}/api/v1/schedule/next?n=${n}`);
  if (!r.ok) throw new Error('API error');
  return r.json();
}
