import React from "react";
import { Icon } from "@/interfaces";
import { computeIconSize } from "@/lib/utils";

interface IconCardImageProps {
  icon: Icon;
}

export const IconCardImage: React.FC<IconCardImageProps> = ({ icon }) => {
  return (
    <i
      className={`ci ci-${icon.classes[0]} ci-${computeIconSize(
        icon
      )}x sm:ci-${computeIconSize(icon) + 1}x`}
      aria-hidden="true"
    />
  );
};
