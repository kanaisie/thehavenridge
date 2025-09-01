// import { site } from "../lib/siteConfig";

import Gallery from "@/components/Gallery";
import {site} from "../../lib/siteConfig"
import Reveal from "@/components/Reveal";
export const metadata = { title: "Services" };
const galleryImages = [
{ src: "/images/gallery/bedroom.jpg", alt: "Smiling caregiver and client in living room" },
{ src: "/images/gallery/livingroom.jpg", alt: "Preparing a healthy meal in kitchen" },
{ src: "/images/gallery/dinning.jpg", alt: "Dining room for all Guest" },
{ src: "/images/gallery/Common.jpg", alt: "Companionship activities and reading" },
{ src: "/images/gallery/Kitchen.jpg", alt: "Light housekeeping support" },
{ src: "/images/gallery/bedroom-4.jpg", alt: "Transportation to appointments" },
];
export default function GalleryPage(){
  return (
    <div className="container py-14">
      {/* <h1 className="text-3xl font-semibold">Homecare Services</h1>
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
        ))} */}


     


<section className="bg-gray-50">
<div className="container py-16">
<h2 className="text-2xl font-semibold">Photo Gallery</h2>
<p className="text-gray-700 mt-2">Moments of care, connection, and comfort.</p>
<div className="mt-6">
<Gallery images={galleryImages} cols={3} />
</div>
</div>
</section>




      </div>
  
  );
}