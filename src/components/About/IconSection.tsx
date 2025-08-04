import IconCard from "@/components/About/IconCard";

interface Icon {
  name: string;
  classes: string[];
}

interface IconSectionProps {
  title: string;
  icons: Icon[];
}

const IconSection: React.FC<IconSectionProps> = ({ title, icons }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {icons.map((icon: Icon) => (
          <IconCard key={icon.name} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default IconSection;
