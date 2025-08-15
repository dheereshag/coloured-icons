import { StarUsOnGithubButton } from ".";
import { heroHeadingClass, heroSubheading } from "@/constants";

const Hero = () => (
  <section className="mx-auto py-8 max-w-5xl sm:py-14 lg:py-20 text-center">
    <h1 className={heroHeadingClass}>
      Zero downloads. Zero build steps.
      <br />
      Just pure CDN magic.
    </h1>
    <h2 className="mt-6 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 max-w-lg mx-auto">
      {heroSubheading}
    </h2>
    <StarUsOnGithubButton />
  </section>
);

export default Hero;
