'use client';

import React from 'react';
import Image from 'next/image';

export default function NavBarBanner() {
  return (
    <div className="relative bg-black text-white font-sans overflow-hidden">
      {/* ✅ Top-right Background Image */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 z-0 pointer-events-none">
        <Image
          src="/images/banner.png" 
          alt="Decoration"
          fill
          className="object-contain opacity-10"
          priority
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between max-w-[1680px] mx-auto py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Logo" width={126} height={130} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-[1rem] font-medium">
          <li className="hover:text-[#DE3A3A] cursor-pointer">Platform</li>
          <li className="hover:text-[#DE3A3A] cursor-pointer">About us</li>
          <li className="hover:text-[#DE3A3A] cursor-pointer">Why us</li>
          <li className="hover:text-[#DE3A3A] cursor-pointer">Services</li>
          <li className="hover:text-[#DE3A3A] cursor-pointer">Blog</li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <button className="hover:text-[#DE3A3A] text-[1rem] font-medium">Log In</button>
          <button className="bg-[#DE3A3A] hover:bg-red-700 text-white text-[1rem] font-medium px-4 py-2 rounded">
            SIGN UP
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </nav>
    </div>
  );
}
