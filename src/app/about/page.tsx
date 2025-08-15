"use client";
import CdnInclude from "@/components/About/CdnInclude";
import IconSection from "@/components/About/IconSection";

import { socialIcons, techIcons } from "@/constants/about";
import {
  CI_CSS_URL_LATEST,
  CI_CSS_URL_VERSION,
  features,
} from "@/constants/about";
import ViewOnGithubButton from "@/components/About/ViewOnGithubButton";

export default function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-20 lg:py-28">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About Coloured Icons
        </h1>
        <p className="text-lg leading-8 text-gray-600 sm:text-xl/8">
          A carefully curated collection of beautiful, customizable icons for
          your next project
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {/* Project Description */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">The Project</h2>
          <p className="text-gray-600">
            Coloured Icons is an open-source project designed to provide
            developers and designers with high-quality, customizable icons. Each
            icon is carefully crafted to maintain consistency while offering
            flexibility in color and style.
          </p>
        </section>

        {/* Icon Showcase */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            Explore Our Icon Collection
          </h2>
          <div className="space-y-6">
            <IconSection title="Tech Icons" icons={techIcons} />
            <IconSection title="Social Icons" icons={socialIcons} />
          </div>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
          <ul className="space-y-4 text-gray-600">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-purple-600">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Installation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Quick Start</h2>

          <CdnInclude
            text="Include via CDN (another version):"
            url={CI_CSS_URL_VERSION}
          />
          <CdnInclude
            text="Include via CDN (latest):"
            url={CI_CSS_URL_LATEST}
          />
        </section>

        {/* Community */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Join the Community
          </h2>
          <p className="text-gray-600">
            Coloured Icons is built with and for the developer community. We
            welcome contributions, suggestions, and feedback to make this
            project even better.
          </p>
          <ViewOnGithubButton />
        </section>
      </div>
    </main>
  );
}
