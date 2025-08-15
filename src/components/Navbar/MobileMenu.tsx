"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { menuItems } from "@/constants";
import MobileHamburger from "./MobileHamburger";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <PopoverTrigger asChild>
          <Button
            className="group size-8"
            variant="ghost"
            size="icon"
            aria-expanded={isMenuOpen}
          >
            <MobileHamburger isOpen={isMenuOpen} />
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="start"
          className="w-48 p-2"
          aria-describedby="mobile-menu-description"
        >
          <nav
            className="space-y-2"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <div key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium rounded-sm hover:bg-accent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium rounded-sm hover:bg-accent ${
                      pathname === item.href
                        ? "text-foreground font-semibold bg-accent"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileMenu;
