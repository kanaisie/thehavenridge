export const site = {
name: "Haven Ridge Assisted Living Facility",
tagline: "Compassionate care at home, 24/7",
url: "https://www.thehaveridge.com",
address: {
street: "309 Wren Ct",
city: "Upper Marlboro",
region: "MD",
postalCode: "20774",
country: "US"
},
phone: "+1 (555) 555-1212",
email: "hello@thehavenridge.com",
logoPath: "/images/logo.svg",
social: {
facebook: "https://facebook.com/caringhands",
instagram: "https://instagram.com/caringhands",
linkedin: "https://linkedin.com/company/caringhands"
},
openingHours: [
"Mo-Fr 08:00-20:00",
"Sa 09:00-17:00",
"Su 10:00-16:00"
],


services: [
{ slug: "companionship", title: "Companionship", blurb: "Friendly, supportive visits to brighten each day." },
{ slug: "personal-care", title: "Personal Care", blurb: "Bathing, dressing, grooming, toileting with dignity." },
{ slug: "medication", title: "Medication Reminders", blurb: "On-time prompts and tracking for meds." },
{ slug: "respite", title: "Respite Care", blurb: "Support for family caregivers when they need a break." },
{ slug: "transport", title: "Transportation", blurb: "Safe rides to appointments and errands." },
{ slug: "live-in", title: "Live‑In Care", blurb: "Round-the-clock, in-home assistance." }
]
} as const;


export type Site = typeof site;