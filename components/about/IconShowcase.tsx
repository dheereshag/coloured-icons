import { IconSection } from ".";
import { socialIcons, techIcons } from "@/constants/about";

export function IconShowcase() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">
        Explore Our Icon Collection
      </h2>
      <div className="space-y-6">
        <IconSection title="Tech Icons" icons={techIcons} />
        <IconSection title="Social Icons" icons={socialIcons} />
      </div>
    </section>
  );
}
