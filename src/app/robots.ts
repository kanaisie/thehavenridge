export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.caringhands-homecare.example/sitemap.xml"
  } as const;
}
