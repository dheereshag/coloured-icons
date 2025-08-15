// Central site metadata used across SEO, sitemap, and social cards
// Update NEXT_PUBLIC_SITE_URL in your env to override deployment URL

export const SITE = {
  name: "Coloured Icons",
  description:
    "Coloured Icons is a fast, CDN-first library of brand, tech, and category icons you can use with a single <i> tag—no installs.",
  // Prefer env, fallback to repo-friendly default and localhost in dev
  url:
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
    "https://coloured-icons.vercel.app",
  creator: "Dheeresh Agarwal",
  twitter: "@dheereshagrwal",
  keywords: [
    "icons",
    "colored icons",
    "coloured icons",
    "brand icons",
    "svg icons",
    "cdn icons",
    "web icons",
    "react icons",
    "nextjs icons",
    "fontawesome sizing",
  ],
  themeColor: "#111827", // gray-900
  repoUrl: "https://github.com/dheereshagrwal/coloured-icons",
} as const;

export type SiteConfig = typeof SITE;
