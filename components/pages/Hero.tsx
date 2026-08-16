import TiltedCard from "@/components/ui/TiltedCard";
import { dm_mono } from "@/app/fonts";
import TextType from "@/components/ui/TextType";
import { techStack } from "@/src/data/hero-techStack";
import GridBackground from "../ui/grid-background-demo";
import Image from "next/image";

function HeroPage() {
  return (
    <section
      id="hero"
      className={`min-h-screen ${dm_mono.className} flex justify-center items-center relative`}
    >
      <GridBackground />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl mx-auto gap-6 md:gap-8 lg:gap-10 items-center">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 text-center lg:text-left order-2 lg:order-1">
            <p className="text-xs sm:text-xs md:text-sm lg:text-sm p-6 tracking-[0.25em] text-emerald-400 uppercase inline-block lg:inline-block mx-auto lg:mx-0">
              * Available for work
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05]">
              Frontend <span className="text-gray-400">Developer</span>
            </h1>

            <TextType
              text="Junior Frontend Developer"
              className="text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-gray-300"
            />

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Frontend Developer skilled in React, Next.js, and modern UI
              libraries. I build clean, responsive, and performance-focused web
              applications with attention to detail and user experience.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 md:pt-4 justify-center lg:justify-start">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex cursor-pointer items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm md:text-base text-gray-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.03] transition duration-300"
                >
                  <span className="text-base sm:text-lg md:text-xl">
                    <tech.icon />
                  </span>
                  <span className="hidden sm:inline">{tech.title}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-xs md:text-sm text-gray-400 pt-2">
              Open for full-time & part-time opportunities
            </p>
          </div>

          <div className="flex items-center justify-center order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="block sm:hidden w-full max-w-xs">
              <Image
                src="/profile/profile.png"
                alt="Profile"
                width={900}
                height={900}
                className="w-full h-90 rounded-xl object-cover"
                priority
              />
            </div>

            <div className="hidden sm:block w-full max-w-sm md:max-w-md lg:max-w-lg grayscale hover:grayscale-0 transition duration-500">
              <TiltedCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
