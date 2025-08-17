import SearchBox from "@/components/search";
import Filter from "@/components/filter";
import Hero from "@/components/home";
import { outfit } from "@/lib/fonts";
import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function Home() {
  return (
    <div className={`relative isolate ${outfit.className} mb-10`}>
      <Hero />

      <section className="mt-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center mb-10">
          <h2
            id="popular-icons"
            className={`${outfit.className} text-4xl text-gray-800 font-medium`}
          >
            Most Popular Coloured Icons
          </h2>
          <div id="search-section" className="lg:w-4/12">
            <SearchBox />
          </div>
        </div>
        <Filter />
      </section>
    </div>
  );
}
