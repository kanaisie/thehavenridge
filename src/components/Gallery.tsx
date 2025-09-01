'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export type GalleryImage = { src: string; alt: string };


export default function Gallery({ images, cols = 3 }: { images: GalleryImage[]; cols?: 2|3|4 }) {
const [open, setOpen] = useState<number | null>(null);
const n = images.length;


function prev(){ if (open==null) return; setOpen((open + n - 1) % n); }
function next(){ if (open==null) return; setOpen((open + 1) % n); }


useEffect(() => {
function onKey(e: KeyboardEvent){
if(open==null) return;
if(e.key === 'Escape') setOpen(null);
if(e.key === 'ArrowLeft') prev();
if(e.key === 'ArrowRight') next();
}
window.addEventListener('keydown', onKey);
return () => window.removeEventListener('keydown', onKey);
}, [open, n]);


const gridCols = cols === 4 ? 'md:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';


return (
<div>
{/* Thumbnails */}
<div className={`grid grid-cols-2 ${gridCols} gap-3`}>
{images.map((img, i) => (
<button key={i} onClick={() => setOpen(i)} className="group relative overflow-hidden rounded-xl border border-gray-200 focus:outline-none focus-visible:ring ring-brand-400">
<div className="relative aspect-[4/3]">
<Image src={img.src} alt={img.alt} fill className="object-cover transition duration-300 group-hover:scale-105" />
</div>
</button>
))}
</div>


{/* Lightbox */}
{open!==null && (
<div className="fixed inset-0 z-50 bg-black/80" onClick={() => setOpen(null)}>
<div className="absolute inset-4 md:inset-12 lg:inset-24 rounded-2xl overflow-hidden" onClick={(e)=> e.stopPropagation()}>
<div className="relative h-full w-full">
<Image src={images[open].src} alt={images[open].alt} fill className="object-contain" />
<button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 hover:bg-white">
<FontAwesomeIcon icon={faXmark} />
</button>
{n>1 && (
<>
<button aria-label="Previous" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white">
<FontAwesomeIcon icon={faChevronLeft} />
</button>
<button aria-label="Next" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white">
<FontAwesomeIcon icon={faChevronRight} />
</button>
</>
)}
</div>
</div>
</div>
)}
</div>
);
}