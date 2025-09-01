import Link from "next/link";
import { site } from "../lib/siteConfig";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Reveal from "@/components/Reveal";
import { iconForService } from "@/lib/icons";
import Carousel from "@/components/Carousel";


import Amenities from "@/components/Amenties";
import Gallery from "@/components/Gallery";
import ReviewForm from "@/components/ReviewForm";
import Reviews from "@/components/Reviews";
import ReviewsSlider from "@/components/ReviewsSlider";



const slides = [
{ src: "/images/amenities/housekeeping.jpg", alt: "Caregiver assisting client", title: "Personal Care", caption: "Bathing, grooming, dignity‑first" },
{ src: "/images/amenities/transportation.jpg", alt: "Caregiver chatting with senior", title: "Companionship", caption: "Meaningful daily connection" },
{ src: "/images/amenities/housekeeping.jpg", alt: "Pills in a weekly box", title: "Medication Reminders", caption: "On‑time prompts, peace of mind" },
];

const galleryImages = [
{ src: "/images/gallery/bed.jpg", alt: "Smiling caregiver and client in living room" },
{ src: "/images/gallery/living.jpg", alt: "Preparing a healthy meal in kitchen" },
{ src: "/images/gallery/kitchen-2.jpg", alt: "Dining room for all Guest" },
{ src: "/images/gallery/meal.jpg", alt: "Companionship activities and reading" },
{ src: "/images/gallery/bed.jpg", alt: "Light housekeeping support" },
{ src: "/images/gallery/bed.jpg", alt: "Transportation to appointments" },
];
export default function HomePage(){
return (
<>





<section className=" from-brand-50 to-white bg-spotlight py-10">
<div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
<div>
  <h1 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-brand-700 to-accent bg-clip-text text-transparent">
        Compassionate, reliable homecare—on your schedule
      </h1>
      <p className="mt-4 text-lg text-gray-700 max-w-prose">
        From companionship to live-in support, we bring peace of mind to families.
      </p>

 <div className="mt-6 flex gap-3">
        <Link href="/contact" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-brand-600 to-accent hover:opacity-95 transition">Request Care</Link>
        <Link href="/services" className="px-5 py-3 rounded-xl border border-brand-500/30 text-brand-700 hover:bg-brand-50 transition">Explore Services</Link>
      </div>



{/* {/* <div className="mt-6 flex gap-3">
<Link href="/contact" className="btn btn-primary">Request Care</Link>
<Link href="/services" className="btn btn-outline">Explore Services</Link>
</div>
<p className="mt-4 text-sm text-gray-600">Call us: <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></p> */}
</div>
<div className="md:justify-self-end">
<Carousel slides={slides} />
</div>
</div>
</section>












{/* 
<section className="bg-gradient-to-b from-brand-50 to-white">
<div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
Compassionate, reliable homecare—on your schedule
</h1>
<p className="mt-4 text-lg text-gray-700 max-w-prose">
From companionship to live‑in support, {site.name} brings peace of mind to families across the metro area.
</p>
<div className="mt-6 flex gap-3">
<Link href="/contact" className="btn btn-primary">Request Care</Link>
<Link href="/services" className="btn btn-outline">Explore Services</Link>
</div>
<p className="mt-4 text-sm text-gray-600">Call us: <a className="underline" href={`tel:${site.phone}`}>{site.phone}</a></p>
</div>
<div className="md:justify-self-end">
<img src="/images/hero.jpg" alt="Caregiver with client" className="rounded-2xl shadow-lg border border-gray-200"/>
</div>
</div>
</section> */}





<section className="container py-16">
<h2 className="text-2xl font-semibold">HomeCare Service</h2>
<p className="text-gray-700 mt-2">Personalized plans from a few hours a week to 24/7 live‑in care.</p>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{site.services.map(s => (
    <Reveal key={s.slug}>
<div key={s.slug} className="card-gradient"><div className="card-surface p-6">
<div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-brand-100 border border-brand-200">
<FontAwesomeIcon icon={iconForService(s.slug)} className="h-6 w-6 text-brand-700" />
</div>
<h3 className="font-semibold text-lg text-brand-800">{s.title}</h3>
<p className="text-gray-600 mt-2">{s.blurb}</p>
<Link href={`/services#${s.slug}`} className="mt-4 inline-block text-brand-700 hover:text-brand-800 underline">Learn more</Link>
</div></div>
</Reveal>
))}
</div>
</section>










{/* <section className="container py-16">
    <div className=" text-left py-10">
<h2 className="text-2xl font-semibold">Our Services</h2>
<p className="text-gray-700 mt-2">Personalized plans from a few hours a week to 24/7 live‑in care.</p>

</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3   ">
{site.services.map(s => (
<div  className="card-gradient"> 
    <Reveal key={s.slug}>
<div key={s.slug} className="card   p-6">
       
       <div className="flex items-end gap-3 mb-4 ">
       <div className=" mx-auto flex h-10 w-10  py-4 items-center justify-center   rounded-xl bg-brand-100 border border-brand-200">
<FontAwesomeIcon icon={iconForService(s.slug)} className="h-5 w-5 text-brand-700 " />
</div>
 </div>
<h3 className="font-semibold text-lg text-center">{s.title}</h3>
 
<p className="text-gray-600 mt-2">{s.blurb}</p>
<Link href={`/services#${s.slug}`} className="mt-4 inline-block text-brand-700 float-right underline">Learn more</Link>
</div>

</Reveal>

</div>
))}
</div>
</section> */}


<section className="bg-gray-50">
<div className="container py-16">
<h2 className="text-2xl font-semibold">Why families choose {site.name}</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
{[
{t: "Licensed & insured", d: "All caregivers vetted, background‑checked, and trained."},
{t: "Flexible care", d: "Hourly, overnight, and live‑in options."},
{t: "Rapid start", d: "Assessment within 24–48 hours in most cases."},
{t: "Transparent pricing", d: "Clear, competitive rates with no surprise fees."},
].map((i, idx)=> (
<div key={idx} className="card p-6">
<h3 className="font-semibold">{i.t}</h3>
<p className="text-gray-600 mt-2">{i.d}</p>
</div>
))}
</div>
</div>
</section>









<section className="container py-16" id="amenities">
<h2 className="text-2xl font-semibold">Amenities & In‑Home Comforts</h2>
<p className="text-gray-700 mt-2">A glimpse at the helpful touches we bring into the home.</p>
<Amenities/>
</section>










<section className="bg-gray-50">

 <section id="testimonials" className="container py-16">
  <h2 className="text-2xl font-semibold">Testimonials</h2>
  <p className="text-gray-700 mt-2">What families say about us.</p>
  <div className="mt-6">
    <ReviewsSlider />
  </div>
</section>


</section>

<section className="container py-16">
<div className="card p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<h2 className="text-xl font-semibold">Ready to talk?</h2>
<p className="text-gray-700 mt-1">Get a free in‑home assessment and personalized care plan.</p>
</div>
<Link href="/contact" className="btn btn-primary">Schedule a call</Link>
</div>
</section>





<section className="bg-gray-50">
<div className="container py-16">
<h2 className="text-2xl font-semibold">Photo Gallery</h2>
<p className="text-gray-700 mt-2">Moments of care, connection, and comfort.</p>
<div className="mt-6">
<Gallery images={galleryImages} cols={3} />
</div>
</div>
</section>






</>
);
}