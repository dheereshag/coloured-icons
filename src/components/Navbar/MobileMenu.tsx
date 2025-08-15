"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { menuItems } from "@/constants";
import MobileHamburger from "./MobileHamburger";
import MobileMenuItem from "./MobileMenuItem";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <MobileMenuItem
                  item={item}
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            ))}
          </nav>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileMenu;
