import Hero from "@/components/Hero";
import Script from "next/script";

export const metadata = { title: "FAQ" };

const faqs = [
  { q: "Are your caregivers licensed and background‑checked?", a: "Yes. All caregivers are vetted, trained, and supervised." },
  { q: "Do you accept long‑term care insurance?", a: "We assist with LTC insurance claims; coverage varies by plan." },
  { q: "How fast can service start?", a: "Often within 24–48 hours after the assessment." },
] as const;

export default function FAQPage(){
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  } as const;

  return (

    <div>
    <Hero
      eyebrow="Section eyebrow"
      title="Frequently Asked Questions"
      subtitle="The Haven Ridge - HomeCare"
      primaryCta={{ href: "/contact", label: "Request Care" }}
      secondaryCta={{ href: "/services", label: "Explore Services" }}
      rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
      align="left"       // or "center"
      bg="spotlight"     // "none" | "spotlight" | "gradient"
    />
    <div className="container py-14">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <div className="mt-8 grid gap-4">
        {faqs.map((f, i)=> (
          <details key={i} className="card p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>

    </div>
  );
}