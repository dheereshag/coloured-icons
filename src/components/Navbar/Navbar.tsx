"use client";

import { useState, useContext, useEffect, useCallback } from "react";
import { SearchContext } from "@/context/SearchContextProvider";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import SearchButton from "./SearchButton";

interface NavbarProps {
  hideSearch?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hideSearch = false }) => {
  const pathname = usePathname();

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
          <MobileMenu />
          {/* Logo */}
          <Logo />
        </div>

        {/* Center - Desktop Navigation */}
        <DesktopMenu />

        {/* Right side - Search */}
        <div className="flex items-center">
          {!hideSearch && (
            <SearchButton
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  handleSearchClick();
                } else {
                  setPendingFocus(true);
                }
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
