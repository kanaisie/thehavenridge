import Hero from "@/components/Hero";

export const metadata = { title: "Pricing" };

export default function PricingPage(){
  const tiers = [
    { name: "Hourly", price: "$30–$38/hr", features: ["2–24 hrs/day", "Weekday & weekend", "No long‑term contract"]},
    { name: "Overnight", price: "$280–$340/night", features: ["Awake/asleep options", "Medication reminders", "Safety checks"]},
    { name: "Live‑In", price: "Custom", features: ["24/7 coverage", "Primary & relief caregivers", "All services included"]},
  ] as const;
  return (
    <div>
    <Hero
      eyebrow="Section eyebrow"
      title="Prices - Cost"
      subtitle="The Haven Ridge - HomeCare"
      primaryCta={{ href: "/contact", label: "Request Care" }}
      secondaryCta={{ href: "/services", label: "Explore Services" }}
      rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
      align="left"       // or "center"
      bg="spotlight"     // "none" | "spotlight" | "gradient"
    />
    <div className="container py-14">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-3 text-gray-700 max-w-prose">Rates vary by location and care needs. Book a free assessment for an exact quote.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="card p-6">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-2 text-brand-700 font-semibold">{t.price}</p>
            <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc pl-5">
              {t.features.map((f, i)=> <li key={i}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}