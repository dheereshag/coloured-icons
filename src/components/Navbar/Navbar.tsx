"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { pacifico } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { Logo } from ".";
interface NavbarProps {
  hideSearch?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ hideSearch = false }) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pendingFocus, setPendingFocus] = useState(false);
  const { triggerFocus } = useContext(SearchContext);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com/dheereshagrwal/coloured-icons/blob/master/README.md",
      label: "Docs",
      external: true,
    },
  ];

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
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-full sm:max-w-sm flex flex-col p-6"
                aria-describedby="mobile-menu-description"
              >
                <SheetHeader className="p-0">
                  <SheetTitle asChild>
                    <Link
                      className={`${pacifico.className} text-2xl font-bold`}
                      href="/"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Coloured Icons
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav
                  className="mt-6"
                  role="navigation"
                  aria-label="Main navigation"
                >
                  <ul className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className={`text-muted-foreground hover:text-foreground transition-colors font-medium ${
                              pathname === item.href
                                ? "text-foreground font-semibold"
                                : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
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
