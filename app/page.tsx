import { SearchBox } from "@/components/search";
import { Filter } from "@/components/filter/";
import { Hero } from "@/components/home";
import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function Home() {
  return (
    <div className="relative isolate mb-10">
      <Hero />

      <section className="mt-4 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center mb-10">
          <h2
            id="popular-icons"
            className="text-3xl sm:text-4xl text-gray-900 font-bold tracking-tight"
          >
            Most Popular Coloured Icons
          </h2>
          <div id="search-section" className="lg:w-5/12">
            <SearchBox />
          </div>
        </div>
        <Filter />
      </section>
    </div>
  );
}
