'use client';
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Our Process",
    "Service",
    "About us",
    "Resource",
    "Book a visit",
    "Contact us",
  ];

  return (
    <header className="w-full bg-white font-montserrat">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img src={logo} alt="SG Financial Logo" className="h-10 w-auto" /> */}
          <Image
            src={`https://www.logodesignlove.com/images/literal/penguin-logo.jpg`}
            alt="Logo"
            width={120}
            height={40}
            className="h-auto w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="hover:font-semibold transition-all duration-150"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block font-montserrat py-1 hover:font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
