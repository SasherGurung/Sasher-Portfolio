"use client";

import { dm_mono } from "@/app/fonts";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function NavbarPage() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Portfolio", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`w-full top-0 left-0 sticky z-50 flex justify-center ${dm_mono.className} text-white border-b`}
    >
      <div className="flex justify-between items-center py-2 px-6 w-full max-w-7xl m-4 border rounded-4xl bg-black border-white">
        <div>
          <Link href="/" className="text-lg sm:text-xl font-bold">
            Sasher Gurung
          </Link>
        </div>

        <nav className="hidden md:flex gap-10 text-md tracking-wider text-gray-50">
          {navLinks.map((item) => (
            <div
              key={item.link}
              className="relative cursor-pointer group hover:scale-105 hover:font-semibold transition duration-200"
            >
              <Link href={item.link} className="hover:text-white">
                {item.label}
              </Link>
              <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-t border-white flex flex-col items-center gap-6 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="text-lg text-gray-200 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavbarPage;
