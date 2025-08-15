import React from "react";
import {
  Grid3x3,
  Palette,
  Car,
  Shirt,
  GraduationCap,
  DollarSign,
  UtensilsCrossed,
  Pill,
  Hash,
  Cpu,
  Plane,
  Music,
  Rabbit,
} from "lucide-react";

export const getCategoryIcon = (categoryName: string) => {
  const margin = "mr-2";
  switch (categoryName.toLowerCase()) {
    case "all":
      return <Grid3x3 className={margin} />;
    case "art and music":
      return <Palette className={margin} />;
    case "automobile":
      return <Car className={margin} />;
    case "clothing and apparel":
      return <Shirt className={margin} />;
    case "education":
      return <GraduationCap className={margin} />;
    case "financial services":
      return <DollarSign className={margin} />;
    case "food and beverage":
      return <UtensilsCrossed className={margin} />;
    case "pharmaceuticals":
      return <Pill className={margin} />;
    case "social media":
      return <Hash className={margin} />;
    case "technology":
      return <Cpu className={margin} />;
    case "travel and tourism":
      return <Plane className={margin} />;
    case "instruments":
      return <Music className={margin} />;
    case "animals":
      return <Rabbit className={margin} />;
    default:
      return null;
  }
};

const CategoryIcon = ({ name }: { name: string }) => {
  return <>{getCategoryIcon(name)}</>;
};

export default CategoryIcon;
