import Link from 'next/link';
import type { ReactNode } from 'react';


type CTA = { href: string; label: string; ariaLabel?: string; variant?: 'primary' | 'secondary' };


export type HeroProps = {
eyebrow?: ReactNode;
title: ReactNode;
subtitle?: ReactNode;
primaryCta?: CTA;
secondaryCta?: CTA;
rightSlot?: ReactNode; // e.g., <Carousel/>, image, video
align?: 'left' | 'center';
bg?: 'none' | 'spotlight' | 'gradient';
className?: string;
containerClassName?: string;
};


export default function Hero({
eyebrow,
title,
subtitle,
primaryCta,
secondaryCta,
rightSlot,
align = 'left',
bg = 'none',
className = '',
containerClassName = '',
}: HeroProps) {
const bgClass = bg === 'spotlight' ? 'bg-spotlight' : bg === 'gradient' ? 'bg-gradient-to-b from-brand-50 to-white' : '';
const gridClass = rightSlot && align !== 'center' ? 'md:grid-cols-2 md:items-center' : '';
const textAlign = align === 'center' ? 'text-center' : '';


return (
<section className={`${bgClass} ${className}`}>
<div className={`container  grid gap-10 py-16 ${gridClass} ${containerClassName}`}>
<div className={textAlign}>
{eyebrow && <div className="text-xs font-semibold uppercase tracking-wider text-brand-700/80">{eyebrow}</div>}
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
{subtitle && <p className="mt-4 text-lg text-gray-700 max-w-prose mx-auto md:mx-0">{subtitle}</p>}


{(primaryCta || secondaryCta) && (
<div className={`mt-6 flex gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
{primaryCta && (
<Link
href={primaryCta.href}
aria-label={primaryCta.ariaLabel || primaryCta.label}
className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent hover:opacity-95 transition focus-visible:outline-none focus-visible:ring ring-brand-400"
>
{primaryCta.label}
</Link>
)}
{secondaryCta && (
<Link
href={secondaryCta.href}
aria-label={secondaryCta.ariaLabel || secondaryCta.label}
className="px-5 py-3 rounded-xl border border-brand-500/30 text-brand-700 hover:bg-brand-50 transition focus-visible:outline-none focus-visible:ring ring-brand-400"
>
{secondaryCta.label}
</Link>
)}
</div>
)}
</div>


{rightSlot && (
<div className="md:justify-self-end">{rightSlot}</div>
)}
</div>
</section>
);
}