'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/pricing',  label: 'Pricing'  },
  { href: '/about',    label: 'About'    },
  { href: '/faq',      label: 'FAQ'      },
   { href: '/gallery',      label: 'Gallery'      },
    { href: '/addReview',      label: 'Add Review'      },
  { href: '/contact',  label: 'Request Care', cta: true }

];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when navigating
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map(l =>
          l.cta ? (
            <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
              {l.label}
            </Link>
          ) : (
            <Link key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </Link>
          )
        )}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-xl p-2 border border-gray-300 hover:bg-gray-50"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {/* icon */}
        {!open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        )}
      </button>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-16 inset-x-0 z-50 border-b bg-white shadow-lg transition
          ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <ul className="py-2">
          {links.map((l, i) => (
            <li key={l.href} className={i ? 'border-t' : ''}>
              <Link
                href={l.href}
                className={`block px-4 py-3 ${l.cta ? 'font-medium text-white bg-blue-600 m-3 rounded-xl text-center' : 'text-gray-900 hover:bg-gray-50'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
