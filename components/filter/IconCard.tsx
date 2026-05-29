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
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="w-full text-left rounded-xl border border-slate-200 p-0 cursor-pointer hover:border-purple-300 hover:shadow-md hover:shadow-purple-50 transition-all duration-200 hover:scale-[1.012] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-1"
    >
      <CardContent className="flex gap-3 p-3 sm:p-4 items-center w-full">
        <IconCardImage icon={icon} />
        <IconCardMeta name={icon.name} url={icon.url} />
      </CardContent>
    </Card>
  );
};
