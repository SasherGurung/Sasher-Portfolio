import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { IconType } from "react-icons/lib";
import { BsTypescript } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";

export type TechStack = {
    title: string;
    icon: IconType
}

export const techStack: TechStack[] = [
  {
    title: "React.js",
    icon: FaReact,
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
  },
  {
    title: "TypeScript",
    icon: BsTypescript,
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
  },
];
