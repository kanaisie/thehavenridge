// import { site } from "../lib/siteConfig";

import Hero from "@/components/Hero";
import {site} from "../../lib/siteConfig"
import Reveal from "@/components/Reveal";
export const metadata = { title: "Services" };

export default function ServicesPage(){
  return (
    <div>
    <Hero
      eyebrow="Section eyebrow"
      title="The HavenRidge  Services"
      subtitle="The Haven Ridge - HomeCare"
      primaryCta={{ href: "/contact", label: "Request Care" }}
      secondaryCta={{ href: "/services", label: "Explore Services" }}
      rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
      align="left"       // or "center"
      bg="spotlight"     // "none" | "spotlight" | "gradient"
    />
    <div className="container py-14">
      <h1 className="text-3xl font-semibold">Homecare Services</h1>
      <p className="mt-3 text-gray-700 max-w-prose">We tailor every plan to the client—frequency, tasks, and schedule.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map(s => (
          <article id={s.slug} key={s.slug} className="card p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-gray-600 mt-2">{s.blurb}</p>
            <ul className="list-disc pl-5 mt-3 text-sm text-gray-700 space-y-1">
              <li>Customized task list</li>
              <li>Flexible hours</li>
              <li>Caregiver matching</li>
            </ul>
          </article>
        ))}
      </div>
    </div>

    </div>
  );
}