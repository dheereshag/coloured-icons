"use client";
import SearchBox from "@/components/Search";
import { Filter } from "../components/Filter";
import Link from "next/link";
import { Star } from "lucide-react";
import { outfit } from "@/lib/fonts";

const heroHeading = "mt-4 text-4xl sm:text-6xl text-gray-900 font-semibold";

export default function Home() {
  return (
    <div className={`relative isolate ${outfit.className} mb-10`}>
      <section className="mx-auto py-8 max-w-5xl sm:py-14 lg:py-20 text-center">
        <h1 className={heroHeading}>Zero downloads. Zero build steps.</h1>
        <h1 className={heroHeading}>Just pure CDN magic.</h1>
        <h2 className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 max-w-lg mx-auto">
          From React to MongoDB, Tesla to Spotify-every icon your project needs,
          instantly accessible via CDN.
        </h2>
        <div className="mt-6 flex justify-center">
          <Link
            href="https://github.com/dheereshagrwal/coloured-icons"
            target="_blank"
            className="relative rounded-full px-4 py-2 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex items-center gap-2"
          >
            <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
            <span className="font-semibold">Star us on Github</span>
          </Link>
        </div>
      </section>

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
