import {
  Community,
  Features,
  Hero,
  IconShowcase,
  Project,
  QuickStart,
} from "@/components/About";

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
