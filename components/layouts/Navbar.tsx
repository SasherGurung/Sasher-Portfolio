import React from "react";
import { dm_mono } from "@/app/fonts";
import Link from "next/link";

function NavbarPage() {
  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Portfolio", link: "#projects" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header className={`w-full top-0 left-0 sticky z-50 flex justify-center ${dm_mono.className} text-white border-b`}>
      <div className="flex justify-between items-center py-2 px-6 w-7xl m-6 border rounded-4xl bg-black border-white">
        <div>
          <h1 className="text-xl font-bold">Sasher Gurung</h1>
        </div>

        <nav className="flex gap-10 text-md tracking-wider text-gray-50 group-hover:text-white">
          {navLinks.map((item) => (
            <div key={item.link} className="relative cursor-pointer group  hover:scale-105 hover:font-semibold transition duration-200">
              <Link
                href={item.link}
                className="hover:text-white"
              >
                {item.label}
              </Link>
              <span className="absolute right-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavbarPage;
