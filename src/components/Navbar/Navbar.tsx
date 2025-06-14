"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiSearch } from "react-icons/ci";
import { MenuList } from ".";
import { SearchContext } from "@/context/SearchContextProvider";
import Link from "next/link";
import { pacifico } from "@/lib/fonts";
import { usePathname } from "next/navigation";
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
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <RxHamburgerMenu className="h-5 w-5" />
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
                  <MenuList
                    className="flex flex-col space-y-4"
                    onClick={() => setIsMenuOpen(false)}
                    activePathname={pathname}
                    orientation="vertical"
                  />
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link
            className={`${pacifico.className} text-2xl lg:text-3xl hover:text-gray-600 transition-colors`}
            href="/"
          >
            Coloured Icons
          </Link>
        </div>
        {/* Center - Desktop Navigation */}
        <div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <MenuList
            className="flex items-center gap-8"
            activePathname={pathname}
            orientation="horizontal"
          />
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
                <CiSearch className="size-4"/>
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
