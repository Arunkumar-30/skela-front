"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    {
      href: "#studyabroad",
      label: "Study Abroad",
      dropdown: [
        { label: "Uk", href: "/uk", img: "/flags/ukFlag.jpg" },
        { label: "Ireland", href: "/ireland", img: "/flags/irelandFlag.jpg" },
        { label: "Germany", href: "/germany", img: "/flags/germanyFlag.jpg" },
        { label: "France", href: "/france", img: "/flags/franceFlag.png" },
        { label: "Italy", href: "/italy", img: "/flags/irelandFlag.jpg" },
        { label: "Poland", href: "/poland", img: "/flags/polandFlag.png" },
        {
          label: "Australia",
          href: "/australia",
          img: "/flags/australiaFlag.jpg",
        },
        { label: "USA", href: "/usa", img: "/flags/usaFlag.jpg" },
        { label: "Canada", href: "/canada", img: "/flags/canadaFlag.jpg" },
        { label: "Dubai", href: "/dubai", img: "/flags/dubaiFlag.jpg" },
        { label: "Europe", href: "/europe", img: "/flags/EUFlag.png" },
        {
          label: "Netherlands",
          href: "/netherlands",
          img: "/flags/netherlandsFlag.png",
        },
        { label: "Spain", href: "/spain", img: "/flags/spainFlag.png" },
        {
          label: "New Zealand",
          href: "/new-zealand",
          img: "/flags/newzealandFlag.jpg",
        },
      ],
    },
    {
      href: "/study-bag",
      label: "Study Bag",
      dropdown: [
        { label: "IELTS", href: "/ielts", img: "/flags/ielts.png" },
        { label: "TOEFL", href: "/toefl", img: "/flags/toefl.png" },
        { label: "PTE", href: "/pte", img: "/flags/pte.png" },
        { label: "GMAT", href: "/gmat", img: "/flags/gmat.png" },
        { label: "GRE", href: "/gre", img: "/flags/gre.png" },
        { label: "SAT", href: "/sat", img: "/flags/sat.png" },
      ],
    },

    { href: "/course-search", label: "Course Search" },
    { href: "/pay-uni-fees", label: "Pay Uni Fees" },
    { href: "/edu-loan", label: "Edu Loan" },
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
                  {navItem.dropdown && (
                    <div className="absolute left-1/2 z-50 transform p-3 -translate-x-1/2 mt-5 border shadow-2xl bg-white scale-y-0 origin-top group-hover:scale-y-100 transition-transform border-none w-64 md:w-80">
                      <ul className="grid grid-cols-2 gap-3 px-3">
                        {navItem.dropdown.map((dropdownItem, idx) => (
                          <li key={idx} className="relative group">
                            <div className="flex items-center justify-between gap-5 ">
                              <div className="flex items-center gap-4">
                                <Image
                                  src={dropdownItem.img}
                                  height={30}
                                  width={30}
                                  alt={dropdownItem.label}
                                />
                                <Link
                                  href={dropdownItem.href}
                                  className="block text-gray-600 hover:text-[#00008f] py-1 rounded-md"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </div>
                              <div className="hidden group-hover:flex">
                                <Image
                                  src="/flags/arrow-right.svg"
                                  height={10}
                                  width={10}
                                  className=""
                                  alt="arrow-right"
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
