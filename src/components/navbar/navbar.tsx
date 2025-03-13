"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    { href: "/", label: "Study Abrod" },
    { href: "/study-bg", label: "Study Bg" },

    { href: "/course-search", label: "Course Search" },
    { href: "/pay-uni-fees", label: "Pay Uni Fees" },
    { href: "/finance", label: "Finance" },
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

            <div className="flex-1 items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-[var(--banner-btn)]"
              >
                SkelaEdu
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex text-sm space-x-5 flex-grow justify-center Poppins text-[#333333] font-medium ">
              {navLink.map((navItem, index) => (
                <div key={index} className="group relative h-full">
                  <Link
                    href={navItem.href}
                    className={`navbar__link py-5   
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
            <div className="hidden text-sm font-bold flex-1 lg:flex justify-end">
              <Link
                href="/contact"
                className={`navbar__link flex items-center rounded-lg text-white  justify-center text-center w-[87px] h-[42px] bg-[var(--banner-btn)] ${
                  route === "/contact" ? "active" : ""
                }`}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
