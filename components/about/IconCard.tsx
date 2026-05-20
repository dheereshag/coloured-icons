import type { Icon as BaseIcon } from "@/interfaces";
import { Card, CardContent } from "@/components/ui/card";

interface IconCardProps {
  icon: Pick<BaseIcon, "name" | "classes">;
}

export const IconCard = ({ icon }: IconCardProps) => {
  return (
    <Card
      key={icon.name}
      className="flex flex-col items-center justify-center p-0 rounded-xl bg-white border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all duration-200"
    >
      <CardContent className="flex flex-col items-center gap-3 p-6">
        <i className={`ci ci-${icon.classes[0]} ci-3x text-gray-800`}></i>
        <span className="text-sm font-medium text-gray-600">{icon.name}</span>
      </CardContent>
    </Card>
  );
};
