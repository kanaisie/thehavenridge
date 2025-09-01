'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

type Status = 'idle' | 'uploading' | 'submitting' | 'ok' | 'error';

function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Rating"
      className="flex items-center gap-1"
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          onClick={() => onChange(n)}
          className="p-1 text-brand-600 focus:outline-none focus-visible:ring ring-brand-400 rounded"
          title={`${n} star${n > 1 ? 's' : ''}`}
        >
          <FontAwesomeIcon
            icon={n <= value ? faStarSolid : faStarRegular}
            className="h-5 w-5"
          />
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [rating, setRating] = useState<number>(5);
  const [file, setFile] = useState<File | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const preview = useMemo(() => {
    if (!file) return null;
    return URL.createObjectURL(file);
  }, [file]);

  async function uploadPhoto(f: File): Promise<string> {
    const fd = new FormData();
    fd.append('file', f);
    const res = await fetch('/api/testimon/upload', { method: 'POST', body: fd });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      throw new Error(j?.error || 'Upload failed');
    }
    const j = await res.json();
    return j.url as string;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot (simple spam trap)
    const hp = String(fd.get('website') || '');
    if (hp.trim() !== '') {
      setStatus('ok'); // pretend success
      form.reset();
      setFile(null);
      setRating(5);
      return;
    }

    const name = String(fd.get('name') || '').trim();
    const message = String(fd.get('message') || '').trim();

    if (!name || !message) {
      setErrorMsg('Please fill in your name and review.');
      return;
    }
    if (name.length > 80 || message.length > 1000) {
      setErrorMsg('Name or message is too long.');
      return;
    }
    if (rating < 1 || rating > 5) {
      setErrorMsg('Rating must be between 1 and 5.');
      return;
    }

    // Optional client-side file checks
    let photoUrl: string | null = null;
    if (file) {
      const okTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
      if (!okTypes.includes(file.type)) {
        setErrorMsg('Please upload a JPG, PNG, WEBP, or GIF.');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Max image size is 5MB.');
        return;
      }
      try {
        setStatus('uploading');
        photoUrl = await uploadPhoto(file);
      } catch (err: any) {
        setStatus('error');
        setErrorMsg(err?.message || 'Upload failed.');
        return;
      }
    }

    try {
      setStatus('submitting');
      const res = await fetch('/api/testimon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, message, photoUrl }),
      });

      console.log
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || 'Submission failed');
      }
      setStatus('ok');
      form.reset();
      setFile(null);
      setRating(5);
      router.refresh(); // refresh server components that read testimonials
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Could not submit. Please try again.');
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 text-center rounded-2xl border p-4 bg-white">
      <h3 className="text-lg font-semibold">Share your testimonial</h3>

      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-1">
        <label className="text-sm" htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          required
          maxLength={80}
          placeholder="Jane D."
          className="rounded-xl border px-3 py-2"
        />
      </div>

      <div className="grid gap-1 text-center">
        <label className="text-sm text-center">Rating</label>
        <StarInput value={rating} onChange={setRating} />
      </div>

      <div className="grid gap-1">
        <label className="text-sm" htmlFor="message">Your Review</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={1000}
          rows={4}
          placeholder="Kind, reliable, and great communication…"
          className="rounded-xl border px-3 py-2"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm" htmlFor="photo">Photo (optional)</label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="rounded-xl border px-3 py-2"
        />
        {preview && (
          <div className="flex items-center gap-3">
            <img
              src={preview}
              alt="Selected preview"
              className="h-14 w-14 rounded-lg object-cover border"
            />
            <button
              type="button"
              onClick={() => setFile(null)}
              className="text-sm underline text-gray-600 hover:text-gray-800"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'uploading' || status === 'submitting'}
        className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent disabled:opacity-60"
      >
        {status === 'uploading' ? 'Uploading…' : status === 'submitting' ? 'Submitting…' : 'Submit'}
      </button>

      {status === 'ok' && (
        <p className="text-sm text-green-700">
          Thanks! Your testimonial was received and is pending approval.
        </p>
      )}
      {status === 'error' && errorMsg && (
        <p className="text-sm text-red-700">{errorMsg}</p>
      )}

      <p className="text-xs text-gray-500">
        By submitting, you agree we may display your testimonial (first name + last initial). We may edit for length/clarity.
      </p>
    </form>
  );
}
