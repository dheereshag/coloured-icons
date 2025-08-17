"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants";

export const DesktopMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              {item.external ? (
                <NavigationMenuLink asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors font-semibold"
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className={`text-muted-foreground hover:text-foreground transition-colors font-semibold ${
                      pathname === item.href ? "text-foreground" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
