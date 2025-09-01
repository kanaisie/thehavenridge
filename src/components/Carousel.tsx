'use client';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export type Slide = { src: string; alt: string; title?: string; caption?: string };


export default function Carousel({ slides, auto = true, interval = 5000 }: { slides: Slide[]; auto?: boolean; interval?: number }) {
const [index, setIndex] = useState(0);
const timerRef = useRef<number | null>(null);
const n = slides.length;


const go = (i: number) => setIndex(((i % n) + n) % n);
const next = () => go(index + 1);
const prev = () => go(index - 1);


useEffect(() => {
if (!auto || n <= 1) return;
if (timerRef.current) window.clearInterval(timerRef.current);
timerRef.current = window.setInterval(() => setIndex(i => (i + 1) % n), interval);
return () => { if (timerRef.current) window.clearInterval(timerRef.current); };
}, [auto, interval, n]);


const pause = () => { if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; } };
const resume = () => {
if (!auto || n <= 1) return;
if (timerRef.current) window.clearInterval(timerRef.current);
timerRef.current = window.setInterval(() => setIndex(i => (i + 1) % n), interval);
};


const startXRef = useRef<number | null>(null);
const onTouchStart = (e: React.TouchEvent) => { startXRef.current = e.touches[0].clientX; pause(); };
const onTouchEnd = (e: React.TouchEvent) => {
if (startXRef.current == null) return;
const delta = e.changedTouches[0].clientX - startXRef.current;
startXRef.current = null;
if (Math.abs(delta) > 40) { delta < 0 ? next() : prev(); }
resume();
};


return (
<div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md" onMouseEnter={pause} onMouseLeave={resume}>
<div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
{slides.map((s, i) => (
<div className="relative w-full shrink-0 aspect-[16/9]" key={i} aria-hidden={i !== index}>
<img src={s.src} alt={s.alt} className="h-full w-full object-cover" />
{(s.title || s.caption) && (
<div className="absolute inset-x-0 bottom-0 bg-black/40 text-white p-3">
{s.title && <div className="text-sm font-medium">{s.title}</div>}
{s.caption && <div className="text-xs opacity-90">{s.caption}</div>}
</div>
)}
</div>
))}
</div>
{n > 1 && (
<>
<button aria-label="Previous slide" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur border hover:bg-white" onClick={prev}>
<FontAwesomeIcon icon={faChevronLeft} />
</button>
<button aria-label="Next slide" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 backdrop-blur border hover:bg-white" onClick={next}>
<FontAwesomeIcon icon={faChevronRight} />
</button>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
{slides.map((_, i) => (
<button key={i} aria-label={`Go to slide ${i + 1}`} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} onClick={() => go(i)} />
))}
</div>
</>
)}
</div>
);
}


