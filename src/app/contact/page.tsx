// import ContactForm from "@/components/ContactForm";



import Hero from "@/components/Hero";
import ContactForm from "../../components/ContactForm";
export const metadata = { title: "Contact" };

export default function ContactPage(){
  return (
<div>
<Hero
  eyebrow="Section eyebrow"
  title="Contact Us"
  subtitle="The Haven Ridge - HomeCare"
  primaryCta={{ href: "/contact", label: "Request Care" }}
  secondaryCta={{ href: "/services", label: "Explore Services" }}
  rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
  align="left"       // or "center"
  bg="spotlight"     // "none" | "spotlight" | "gradient"
/>




    <div className="container py-14 grid gap-10 md:grid-cols-2">





      <div>
        <h1 className="text-3xl font-semibold">Request Care</h1>
        <p className="mt-2 text-gray-700">Tell us about your needs. We’ll call you to set up a free assessment.</p>
        <ContactForm />
      </div>
      <div className="card p-6">
        <h2 className="font-semibold">What happens next?</h2>
        <ol className="mt-3 list-decimal pl-5 text-gray-700 space-y-1">
          <li>Intro call to learn about care needs</li>
          <li>Free in‑home assessment</li>
          <li>Care plan & caregiver matching</li>
          <li>Care starts (usually within 24–48 hours)</li>
        </ol>
      </div>
    </div>

    </div>
  );
}