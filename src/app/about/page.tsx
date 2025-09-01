export const metadata = { title: "About" };
import Hero from "@/components/Hero";
export default function AboutPage(){
  return (

<div>
    <Hero
  eyebrow="Section eyebrow"
  title="About Us"
  subtitle="The Haven Ridge - HomeCare"
  primaryCta={{ href: "/contact", label: "Request Care" }}
  secondaryCta={{ href: "/services", label: "Explore Services" }}
  rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
  align="left"       // or "center"
  bg="spotlight"     // "none" | "spotlight" | "gradient"
/>
<div className="container-fluid  mt-4 mb-4">








    <div className="container py-14 prose">
      <h1>About Us</h1>
      <p>We founded CaringHands to help families keep loved ones comfortable at home with dignity. Our leadership team includes registered nurses and experienced administrators.</p>
      <h2>Our Promise</h2>
      <ul>
        <li>Respect and empathy in every interaction</li>
        <li>Clear communication and transparent pricing</li>
        <li>Reliable, trained caregivers</li>
      </ul>
    </div>

    </div>

    </div>
  );
}