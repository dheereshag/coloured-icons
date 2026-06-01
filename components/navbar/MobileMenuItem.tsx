"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MenuItem } from "@/constants/nav";
import { cn } from "@/lib/utils";

interface Props {
  item: MenuItem;
  onClick: () => void;
}

const baseClass =
  "block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium rounded-sm hover:bg-accent";

export const MobileMenuItem: React.FC<Props> = ({ item, onClick }) => {
  const pathname = usePathname();

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        onClick={onClick}
      >
        {item.label}
      </a>
    );
  }

  const active = pathname === item.href;
  return (
    <Link
      href={item.href}
      className={cn(baseClass, active && "text-foreground font-semibold bg-accent")}
      onClick={onClick}
    >
      {item.label}
    </Link>
  );
};
