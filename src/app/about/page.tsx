"use client";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import CdnInclude from "../../components/About/CdnInclude";
import IconSection from "../../components/About/IconSection";

const CI_CSS_URL_VERSION =
  "https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@1.8.9/src/app/ci.min.css";
const CI_CSS_URL_LATEST =
  "https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@master/src/app/ci.min.css";

const features = [
  "Over 100+ professionally designed icons",
  "Multiple variations for popular brands and logos",
  "Easy implementation with simple HTML/CSS classes",
  "Regular updates and new icon additions",
];

export default function About() {
  return (
    <>
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
            <h2 className="text-2xl font-semibold text-gray-900">
              The Project
            </h2>
            <p className="text-gray-600">
              Coloured Icons is an open-source project designed to provide
              developers and designers with high-quality, customizable icons.
              Each icon is carefully crafted to maintain consistency while
              offering flexibility in color and style.
            </p>
          </section>

          {/* Icon Showcase */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Explore Our Icon Collection
            </h2>
            <div className="space-y-6">
              <IconSection title="Development & Technology Icons" type="tech" />
              <IconSection title="Brand & Social Media Icons" type="social" />
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
            <h2 className="text-2xl font-semibold text-gray-900">
              Quick Start
            </h2>

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
            <div className="mt-4">
              <Link
                href="https://github.com/dheereshagrwal/coloured-icons"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black shadow-lg hover:shadow-gray-900/20 transition-all"
              >
                <FaGithub className="text-xl" />
                <span className="font-medium">View on GitHub</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
