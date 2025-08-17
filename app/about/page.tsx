import type { Metadata } from "next";
import { Hero, Project, IconShowcase, Features, QuickStart, Community } from "@/components/about";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: `About · ${SITE.name}`,
  description:
    "Learn about Coloured Icons, a CDN-first icon library with simple <i> based usage and Font Awesome-like sizing.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:py-14 lg:py-20">
      <Hero />

      <div className="mt-16 space-y-12">
        <Project />
        <IconShowcase />
        <Features />
        <QuickStart />
        <Community />
      </div>
    </main>
  );
}
