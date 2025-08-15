"use client";
import SearchBox from "@/components/Search";
import { Filter } from "../components/Filter";
import { outfit } from "@/lib/fonts";
import StarUsOnGithubButton from "@/components/StarUsOnGithubButton";
import { heroHeadingClass, heroSubheading } from "@/constants";

const Hero = () => (
  <section className="mx-auto py-8 max-w-5xl sm:py-14 lg:py-20 text-center">
    <h1 className={heroHeadingClass}>Zero downloads. Zero build steps.</h1>
    <h1 className={heroHeadingClass}>Just pure CDN magic.</h1>
    <h2 className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 max-w-lg mx-auto">
      {heroSubheading}
    </h2>
    <StarUsOnGithubButton />
  </section>
);

export default function Home() {
  return (
    <div className={`relative isolate ${outfit.className} mb-10`}>
      <Hero />

      <section className="mt-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center mb-10">
          <h1
            id="popular-icons"
            className={`${outfit.className} text-4xl text-gray-800 font-medium`}
          >
            Most Popular Coloured Icons
          </h1>
          <div id="search-section" className="lg:w-4/12">
            <SearchBox />
          </div>
        </div>
        <Filter />
      </section>
    </div>
  );
}
