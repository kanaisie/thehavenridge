import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
export const metadata = { title: "HomeCare", description: "Compassionate care at home" };
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import SocialRail from "@/components/SocialRail";
faConfig.autoAddCss = false;

import { site } from "@/lib/siteConfig";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <SocialRail/>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
          <div className="container h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold">The HavenRidge</Link>
            <Nav />
          </div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-gray-200">





<div className="h-0.5 bg-gradient-to-r from-brand-400 via-accent to-brand-400" />
<div className="container py-10 grid gap-8 md:grid-cols-3">
<div>
<div className="flex items-center gap-3 mb-4">
<img src="/images/logo.svg" alt="logo" className="h-8 w-8"/>
<span className="font-semibold">{site.name}</span>
</div>
<p className="text-sm text-gray-600">{site.tagline}</p>
</div>
<div>
<h4 className="font-semibold mb-3">Contact</h4>
<ul className="space-y-1 text-sm text-gray-700">
<li>{site.address.street}</li>
<li>{site.address.city}, {site.address.region} {site.address.postalCode}</li>
<li>Phone: <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></li>
<li>Email: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3">Links</h4>
<ul className="space-y-1 text-sm">
<li><Link href="/careers" className="hover:underline">Careers</Link></li>
<li><Link href="/blog" className="hover:underline">Blog</Link></li>
<li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
<li><Link href="/terms" className="hover:underline">Terms</Link></li>
</ul>
</div>
</div>
{/* <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} {site.name}. All rights reserved.</div> */}




  
  <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
    © {new Date().getFullYear()} HomeCare. All rights reserved.
  </div>
        </footer>
      </body>
    </html>
  );
}
