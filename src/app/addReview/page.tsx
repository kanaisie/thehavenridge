// import { site } from "../lib/siteConfig";

import Hero from "@/components/Hero";
import {site} from "../../lib/siteConfig"
import Reveal from "@/components/Reveal";
import ReviewForm from "@/components/ReviewForm";
export const metadata = { title: "Services" };

export default function AddReviewPage(){
  return (
 <div>
        <Hero
      eyebrow="Service Comments"
      title="Add Reviews"
      subtitle="The Haven Ridge - HomeCare"
      primaryCta={{ href: "/contact", label: "Request Care" }}
      secondaryCta={{ href: "/services", label: "Explore Services" }}
      rightSlot={<img src="/images/amenities/hero.jpg" alt="..." className="rounded-2xl border" />} // optional
      align="left"       // or "center"
      bg="spotlight"     // "none" | "spotlight" | "gradient"
    />

  <main className="container min-h-[calc(100vh-4rem)] grid place-items-center py-4">
      {/* header is h-16 (4rem); adjust if yours differs */}
      <div className="w-full max-w-xl">
    <ReviewForm />  
 
</div>

</main>
</div>



  );
}