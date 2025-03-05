"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Om" },
 
    { href: "/sustainability", label: "Sustainability" },
    { href: "/events", label: "Events" },
  ];

  return (
    <div>
   
      <nav className="bg-transparent  z-50 left-0 right-0 py-1">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden z-50">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/hom/logo.svg"
                  width={1000}
                  height={1000}
                  className="w-48"
                  alt="Brand Logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex text-sm flex-1 ps-5 ms-5 border-l-2 space-x-6">
              {navLink.map((navItem, index) => (
                <div key={index} className="group relative h-full">
                  <Link
                    href={navItem.href}
                    className={`navbar__link py-5 ${
                      route === navItem.href ||
                      (navItem.href === "#services" &&
                        (route.includes("managed") || route.includes("av"))) ||
                      (navItem.href === "#product" &&
                        (route.includes("/printers") ||
                          route.includes("toner") ||
                          route.includes("accessories") ||
                          route.includes("hardware")))
                        ? "active"
                        : ""
                    }`}
                  >
                    {navItem.label}
                  </Link>

                </div>
              ))}
            </div>

            {/* Extra Links */}
            <div className="hidden text-sm font-semibold flex-1 lg:flex space-x-5 justify-end">
              <Link
                href="/career"
                className={`navbar__link py-5 ${
                  route === "/career" ? "active" : ""
                }`}
              >
                Career
              </Link>
              <Link
                href="/contact"
                className={`navbar__link py-5 ${
                  route === "/contact" ? "active" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* <MobileMenu
          navLink={navLink}
          isMobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          route={route}
        /> */}
      </nav>
    </div>
  );
};

export default NavbarComponent;
