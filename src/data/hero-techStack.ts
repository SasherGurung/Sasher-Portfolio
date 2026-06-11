import { TbBrandTypescript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { IconType } from "react-icons/lib";

export type TechStack = {
    label: string;
    icon: IconType
}

export const techStack: TechStack[] = [
  {
    label: "TypeScript",
    icon: TbBrandTypescript,
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
  },
  {
    label: "React",
    icon: FaReact,
  },
  {
    label: "Tailwind",
    icon: RiTailwindCssFill,
  },
];
