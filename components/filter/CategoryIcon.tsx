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
  type LucideIcon,
} from "lucide-react";

const margin = "mr-2";

const iconMap: Record<string, LucideIcon> = {
  all: Grid3x3,
  "art and music": Palette,
  automobile: Car,
  "clothing and apparel": Shirt,
  education: GraduationCap,
  "financial services": DollarSign,
  "food and beverage": UtensilsCrossed,
  pharmaceuticals: Pill,
  "social media": Hash,
  technology: Cpu,
  "travel and tourism": Plane,
  instruments: Music,
  animals: Rabbit,
};

export const getCategoryIcon = (categoryName: string) => {
  const Icon = iconMap[categoryName.toLowerCase()];
  return Icon ? <Icon className={margin} /> : null;
};

export const CategoryIcon = ({ name }: { name: string }) =>
  getCategoryIcon(name);
