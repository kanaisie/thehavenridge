import Image from "next/image";


const amenities = [
{ title: "Diabetic Care", src: "/images/amenities/meal.jpg", alt: "Caregiver assisting with grooming" },
{ title: "Room Amenties", src: "/images/gallery/livingroom.jpg", alt: "Cable, Wifi, Bath Tubs &  Respite" },
{ title: "Activities", src: "/images/amenities/activities.jpg", alt: "Art Classes, Stretching Classes, Live Musical and Parties" },
{ title: "Meal Preparation", src: "/images/amenities/smiling.jpg", alt: "Healthy meal preparation in the kitchen" },
{ title: "Common Areas", src: "/images/gallery/common.jpg", alt: "Outsie Patio,Indoor Common Areas,Media Center" },
{ title: "Transportation & Residential Parking", src: "/images/amenities/transportation.jpg", alt: "Safe ride to appointments" },

];


export default function Amenities(){
return (
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{amenities.map((a)=> (
<figure key={a.title} className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
<div className="relative aspect-[4/3]">
{/* You can switch to <img> if you prefer; Next Image gives perf benefits */}
<Image src={a.src} alt={a.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
</div>
<figcaption className="px-4 py-3 flex items-center justify-between">
<span className="font-medium text-brand-800">{a.title}</span>
<span className="text-xs text-gray-500">{a.alt}</span>
</figcaption>
</figure>
))}
</div>
);
}