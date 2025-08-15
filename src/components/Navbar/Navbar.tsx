"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { menuItems } from "@/constants";
import MobileHamburger from "./MobileHamburger";

interface NavbarProps {
  hideSearch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hideSearch = false }) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pendingFocus, setPendingFocus] = useState(false);
  const { triggerFocus } = useContext(SearchContext);

  const handleSearchClick = useCallback(() => {
    const searchSection = document.getElementById("search-section");
    if (searchSection) {
      const offset = 50;
      const elementPosition = searchSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      triggerFocus();
    }
  }, [triggerFocus]);

  useEffect(() => {
    if (pendingFocus && pathname === "/") {
      handleSearchClick();
      setPendingFocus(false);
    }
  }, [pathname, pendingFocus, handleSearchClick]);

  return (
    <nav className="my-6" aria-label="Global">
      <div className="flex items-center justify-between gap-4">
        {/* Left side - Logo (and hamburger on mobile) */}
        <div className="flex items-center gap-4">
          {/* Mobile hamburger menu */}
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
          {/* Logo */}
          <Logo />
        </div>

        {/* Center - Desktop Navigation */}
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

        {/* Right side - Search */}
        <div className="flex items-center">
          {!hideSearch && (
            <Button asChild variant="ghost" size="icon">
              <Link
                href="/"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    handleSearchClick();
                  } else {
                    setPendingFocus(true);
                  }
                }}
              >
                <Search className="size-5" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
