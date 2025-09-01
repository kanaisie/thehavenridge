import { site } from "@/lib/siteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const items = [
  { key: "facebook",  label: "Facebook",  href: () => site.social?.facebook,  icon: faFacebookF },
  { key: "instagram", label: "Instagram", href: () => site.social?.instagram, icon: faInstagram },
  { key: "linkedin",  label: "LinkedIn",  href: () => site.social?.linkedin,  icon: faLinkedinIn },
  { key: "x",         label: "X (Twitter)", href: () => (site as any).social?.x || (site as any).social?.twitter, icon: faXTwitter },
  { key: "whatsapp",  label: "WhatsApp",  href: () => (site as any).social?.whatsapp, icon: faWhatsapp },
] as const;

export default function SocialRail() {
  const links = items
    .map((it) => ({ ...it, url: it.href?.() as string | undefined }))
    .filter((it) => typeof it.url === "string" && it.url);

  if (!links.length) return null;

  return (
    <aside
      aria-label="Social links"
      className="hidden sm:flex fixed left-3 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
    >
      {links.map(({ key, label, url, icon }) => (
        <a
          key={key}
          href={url}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          className="group relative grid h-10 w-10 place-items-center rounded-full bg-white border border-gray-200 text-brand-700 shadow hover:bg-brand-50 focus:outline-none focus-visible:ring ring-brand-400"
        >
          <FontAwesomeIcon icon={icon} className="h-4 w-4" />
          <span className="pointer-events-none absolute left-full ml-2 rounded bg-black/80 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            {label}
          </span>
        </a>
      ))}
      <div className="mx-auto mt-2 h-10 w-px bg-gradient-to-b from-brand-400/60 to-transparent" />
    </aside>
  );
}
