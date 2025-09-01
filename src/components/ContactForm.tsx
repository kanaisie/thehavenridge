'use client';            // <-- must be the VERY FIRST line (no imports/comments above)

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<"loading"|"ok"|"error"|string|null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setStatus(res.ok ? 'ok' : (data?.error ?? 'error'));
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      {/* ...fields... */}
    </form>
  );
}
