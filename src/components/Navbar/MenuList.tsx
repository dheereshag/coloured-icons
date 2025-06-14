"use client";

import type React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuListProps {
  className?: string;
  onClick?: () => void;
  activePathname?: string;
  orientation?: "horizontal" | "vertical";
}

const MenuList: React.FC<MenuListProps> = ({
  className,
  onClick,
  activePathname,
  orientation = "horizontal",
}) => {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com/dheereshagrwal/coloured-icons/blob/master/README.md",
      label: "Docs",
      external: true,
    },
  ];

  return (
    <ul
      className={cn(
        orientation === "horizontal"
          ? "flex items-center gap-2"
          : "flex flex-col space-y-2",
        className
      )}
      onClick={onClick}
    >
      {menuItems.map((item) => (
        <li key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {item.label}
            </a>
          ) : (
            <Link
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors font-medium",
                activePathname === item.href && "text-foreground font-semibold"
              )}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
