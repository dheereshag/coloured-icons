import { IconCard } from ".";
import type { Icon as BaseIcon } from "@/interfaces";

interface IconSectionProps {
  title: string;
  icons: Array<Pick<BaseIcon, "name" | "classes">>;
}

export const IconSection: React.FC<IconSectionProps> = ({ title, icons }) => {
  return (
    <section>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {icons.map((icon) => (
          <IconCard key={icon.name} icon={icon} />
        ))}
      </div>
    </section>
  );
};
