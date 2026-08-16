import { dm_mono } from "@/app/fonts";
import TiltedCard from "@/components/ui/TiltedCard";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { experiences } from "@/src/data/experience";
import Image from "next/image";

function AboutPage() {
  return (
    <section
      id="about"
      className={`min-h-screen bg-black text-white ${dm_mono.className} flex justify-center items-center flex-col px-4 sm:px-6 md:px-10`}
    >
      <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-[0.3em] sm:tracking-[0.4em] text-gray-400 mb-10 sm:mb-16">
        MY PERSONAL INFORMATION
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="flex justify-center">
          <div className="block sm:hidden w-full max-w-xs">
            <Image
              src="/profile/profile.png"
              alt="Profile"
              width={900}
              height={900}
              className="w-full rounded-xl h-90 object-cover"
              priority
            />
          </div>

          <div className="hidden sm:block w-full max-w-sm md:max-w-md lg:max-w-lg grayscale hover:grayscale-0 transition duration-500">
            <TiltedCard />
          </div>
        </div>

        <div className="space-y-5 text-center md:text-left">
          <p className="text-gray-400 text-lg sm:text-xl font-bold tracking-widest uppercase">
            About Me
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Sasher <span className="text-gray-400">Gurung</span>
          </h1>

          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a frontend developer focused on building clean, responsive, and
            accessible web interfaces using modern web technologies. I
            prioritize performance, usability, and maintainable code while
            creating engaging user experiences.
          </p>

          <div className="flex flex-wrap gap-2 pt-4 justify-center md:justify-start">
            <Link
              href="https://drive.google.com/file/d/1DcsEoEERdHLA1zp7MgrLLFpfAphD4JiG/view?usp=drive_link"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-6 sm:m-10 pt-5 w-full max-w-6xl">
        {experiences.map((index) => (
          <div
            key={index.id}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer text-center"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {index.exp}
            </h3>
            <p className="text-gray-400 mt-2">{index.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
