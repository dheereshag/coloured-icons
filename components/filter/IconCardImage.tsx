import { Icon } from "@/interfaces";
import { computeIconSize } from "@/lib/utils";

interface IconCardImageProps {
  icon: Icon;
}

export const IconCardImage: React.FC<IconCardImageProps> = ({ icon }) => {
  const size = computeIconSize(icon);
  return (
    <i
      className={`ci ci-${icon.classes[0]} ci-${size}x sm:ci-${size + 1}x`}
      aria-hidden="true"
    />
  );
};
