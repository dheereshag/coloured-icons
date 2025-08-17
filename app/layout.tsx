import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SearchContextProvider } from "@/context/SearchContextProvider";
import { outfit } from "@/lib/fonts";
import { SITE } from "@/constants/site";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: "%s · Coloured Icons",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.creator }],
  creator: SITE.creator,
  publisher: SITE.creator,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: `${SITE.name} – ${SITE.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: SITE.name,
    description: SITE.description,
    images: ["/og"],
  },
  appleWebApp: {
    title: SITE.name,
    statusBarStyle: "default",
    capable: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    sameAs: [SITE.repoUrl, `https://x.com/${SITE.twitter.replace("@", "")}`],
    author: {
      "@type": "Person",
      name: SITE.creator,
    },
  };
  return (
    <html lang="en" className="scroll-smooth overflow-y-scroll">
      <body className={`px-8 ${outfit.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <SearchContextProvider>
          <section className="max-w-7xl mx-auto">
            <Navbar />
          </section>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}
