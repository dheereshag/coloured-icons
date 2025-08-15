import SearchBox from "@/components/Search/Search";
import { Filter } from "../components/Filter";
import { outfit } from "@/lib/fonts";
import Hero from "@/components/Home/Hero";

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
