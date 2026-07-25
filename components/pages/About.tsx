"use client";

import { dm_mono } from "@/app/fonts";
import TiltedCard from "@/components/ui/TiltedCard";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { experiences } from "@/src/data/experience";

function AboutPage() {
  return (
    <section
      id="about"
      className={`min-h-screen bg-black text-white ${dm_mono.className} flex justify-center items-center flex-col`}
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

        <div className="space-y-5">
          <p className="text-gray-400 text-xl font-bold tracking-widest uppercase">
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
            <Link
              href="https://drive.google.com/file/d/1wYLN2FDW09v5VSCv8ATrLfOhXJ3vdYkU/view?usp=sharing"
              target="_blank"
            >
              <button className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-gray-200 hover:bg-white text-black font-medium hover:scale-105 transition-all duration-500">
                <IoDocumentTextOutline />
                Download CV
              </button>
            </Link>

            <Link
              href="#projects"
              className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500"
            >
              <GoArrowUpRight />
              View Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-around m-10 gap-5 pt-5">
        {experiences.map((index) => (
          <div
            key={index.id}
            className="p-6 rounded-2xl w-100 border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer"
          >
            <h3 className="text-4xl font-bold">{index.exp}</h3>
            <p className="text-gray-400 mt-2">{index.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
