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
  Gamepad2,
  School,
  type LucideIcon,
} from "lucide-react";

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
  games: Gamepad2,
  universities: School,
};

export const CategoryIcon = ({ name }: { name: string }) => {
  const Icon = iconMap[name.toLowerCase()];
  return Icon ? <Icon className="mr-2" /> : null;
};
