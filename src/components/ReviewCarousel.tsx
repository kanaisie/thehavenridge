'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

export type TestimonItem = {
  id: number;
  name: string;
  rating: number;              // 1..5
  message: string;
  photoUrl?: string | null;
  createdAt?: string | null;   // ISO string ok
};

export default function ReviewCarousel({
  reviews,
  autoMs = 6000,              // autoplay interval
}: {
  reviews: TestimonItem[];
  autoMs?: number;
}) {
  const [i, setI] = useState(0);
  const n = reviews.length;
  const paused = useRef(false);

  // simple guards
  const items = useMemo(() => reviews ?? [], [reviews]);

  useEffect(() => {
    if (!n) return;
    const t = setInterval(() => {
      if (!paused.current) setI((v) => (v + 1) % n);
    }, autoMs);
    return () => clearInterval(t);
  }, [n, autoMs]);

  function prev() { setI((v) => (v + n - 1) % n); }
  function next() { setI((v) => (v + 1) % n); }

  if (!n) {
    return (
      <div className="rounded-2xl border p-6 bg-white text-gray-600">
        No testimonials yet.
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* viewport */}
      <div className="overflow-hidden rounded-2xl border bg-white">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {items.map((r) => (
            <div key={r.id} className="w-full shrink-0 p-6">
              <article className="grid gap-4">
                <header className="flex items-center gap-3">
                  {r.photoUrl ? (
                    <img
                      src={r.photoUrl}
                      alt={`${r.name} photo`}
                      className="h-12 w-12 rounded-full object-cover border"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-brand-100 border" />
                  )}

                  <div className="min-w-0">
                    <div className="font-medium text-brand-800 truncate">{r.name}</div>
                    <Stars value={r.rating} />
                  </div>
                </header>

                <p className="text-gray-800 leading-relaxed">{r.message}</p>

                {r.createdAt && (
                  <span className="text-xs text-gray-500">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </span>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* arrows */}
      {n > 1 && (
        <>
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 border shadow hover:bg-white focus-visible:ring ring-brand-400"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 border shadow hover:bg-white focus-visible:ring ring-brand-400"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {/* dots */}
      {n > 1 && (
        <div className="mt-3 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? 'bg-brand-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Stars({ value }: { value: number }) {
  const v = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div className="flex gap-1" aria-label={`${v} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={i < v ? faStarSolid : faStarRegular}
          className="h-4 w-4 text-brand-600"
        />
      ))}
    </div>
  );
}
