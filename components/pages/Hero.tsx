import TiltedCard from "@/components/ui/TiltedCard";
import { dm_mono } from "@/app/fonts";
import TextType from "@/components/ui/TextType";
import { techStack } from "@/src/data/hero-techStack";
import GridBackground from "../ui/grid-background-demo";

function HeroPage() {
  return (
    <section
      id="hero"
      className={`min-h-screen ${dm_mono.className} flex justify-center items-center relative`}
    >
      <GridBackground />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto px-6 md:px-10 gap-10">
        <div className="space-y-6">
          <p className="text-xs tracking-[0.25em] text-emerald-400 uppercase">
            * Available for work
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05]">
            Frontend <span className="text-gray-400">Developer</span>
          </h1>

          <TextType
            text="Junior Frontend Developer"
            className="text-base md:text-lg tracking-wide text-gray-300"
          />

          <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
            Frontend Developer skilled in React, Next.js, and modern UI
            libraries. I build clean, responsive, and performance-focused web
            applications with attention to detail and user experience.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:scale-[1.03] transition"
              >
                <span className={`text-lg`}>
                  <tech.icon />
                </span>
                <span>{tech.title}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400">
            Open for full-time & part-time opportunities
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="grayscale hover:grayscale-0 transition duration-500">
            <TiltedCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
