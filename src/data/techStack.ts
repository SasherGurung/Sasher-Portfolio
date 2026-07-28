import { SiNextdotjs, SiZod } from "react-icons/si";
import { BsFillLayersFill, BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";;
import { IconType } from "react-icons/lib";

export type TechStack = {
  title: string;
  icon: IconType;
  color: string;
};

export const techStack: TechStack[] = [
  {
    title: "React.js",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    title: "TypeScript",
    icon: BsTypescript,
    color: "text-blue-500",
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400",
  },
  {
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "text-sky-400",
  },
  {
    title: "HTML",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-400",
  },
  {
    title: "Git",
    icon: FaGithub,
    color: "text-orange-500",
  },
  {
    title: "Zod",
    icon: SiZod,
    color: "text-blue-500",
  },
  {
    title: "Zustand",
    icon: BsFillLayersFill,
    color: "text-purple-500",
  },
];
