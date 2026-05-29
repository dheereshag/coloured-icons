import { StarUsOnGithubButton } from ".";
import { heroSubheading } from "@/constants";

export const Hero = () => (
  <section className="mx-auto py-10 max-w-5xl sm:py-16 lg:py-24 text-center">
    <h1 className="mt-4 text-4xl sm:text-6xl text-gray-900 font-bold tracking-tight leading-tight">
      Zero downloads. Zero build steps.
      <br />
      <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Just pure CDN magic.
      </span>
    </h1>
    <p className="mt-6 text-pretty text-lg font-normal text-gray-500 sm:text-xl max-w-lg mx-auto leading-relaxed">
      {heroSubheading}
    </p>
    <StarUsOnGithubButton />
  </section>
);
