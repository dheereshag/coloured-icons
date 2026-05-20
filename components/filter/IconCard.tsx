import { Icon } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";
import { IconCardImage } from "./IconCardImage";
import { IconCardMeta } from "./IconCardMeta";

interface IconCardProps {
  icon: Icon;
  onClick?: () => void;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, onClick }) => {
  return (
    <Card
      onClick={onClick}
      className="w-full text-left rounded-lg border-2 p-0 cursor-pointer hover:border-purple-400 hover:shadow-md transition-transform duration-200 hover:scale-[1.015]"
    >
      <CardContent className="flex gap-3 p-3 sm:p-4 items-center w-full">
        <IconCardImage icon={icon} />
        <IconCardMeta name={icon.name} url={icon.url} />
      </CardContent>
    </Card>
  );
};
