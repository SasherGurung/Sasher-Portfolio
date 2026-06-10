"use client";

import { dm_mono } from "@/app/fonts";
import TiltedCard from "@/components/ui/TiltedCard";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

function AboutPage() {

  return (
    <section
      id="about"
      className={`min-h-screen text-white ${dm_mono.className} scroll-mt-30`}
    >
      <h1 className="text-center text-3xl font-bold tracking-[0.4em] text-gray-400 mb-16">
        MY PERSONAL INFORMATION
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
        <div className="flex justify-center">
          <div className="grayscale hover:grayscale-0 transition duration-500">
            <TiltedCard />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-400 text-lg font-bold tracking-widest uppercase">
            About Me
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Sasher <span className="text-gray-400">Gurung</span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            I am a frontend developer focused on building clean, responsive, and
            accessible web interfaces using modern web technologies. I
            prioritize performance, usability, and maintainable code while
            creating engaging user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200  hover:bg-white text-black font-medium hover:scale-105 transition-all duration-500">
              <IoDocumentTextOutline />
              Download CV
            </button>

            <Link href="#projects" className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
              <GoArrowUpRight />
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-around m-10">
        <div className="p-6 rounded-2xl w-100 border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-4xl font-bold">1+</h3>
          <p className="text-gray-400 mt-2">Years Learning</p>
        </div>

        <div className="p-6 rounded-2xl w-100 border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-4xl font-bold">10+</h3>
          <p className="text-gray-400 mt-2">Projects Built</p>
        </div>

        <div className="p-6 rounded-2xl w-100 border border-white/10 bg-white/5 hover:bg-white/10 transition">
          <h3 className="text-4xl font-bold">5+</h3>
          <p className="text-gray-400 mt-2">Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
