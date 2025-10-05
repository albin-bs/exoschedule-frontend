import React, { useEffect, useState } from 'react';
import { fetchSchedule } from '../lib/api';

export default function Schedule() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchSchedule(10);
        setItems(Array.isArray(data.items) ? data.items : data);
      } catch (e) {
        setError(e.message || 'Failed to load schedule');
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading schedule…</div>;
  if (error) return <div style={{ padding: 24, color: 'crimson' }}>Error: {error}</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2>Upcoming Observations</h2>
      {items.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {items.map((it, idx) => (
            <li key={idx}>
              <strong>{it.toi || it.toi_id || 'TOI'}</strong>
              {' - '}
              {it.time_utc || it.observation_time || it.time || 'TBD'}
              {typeof it.priority !== 'undefined' ? ` - priority: ${it.priority}` : ''}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}
