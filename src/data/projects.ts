import { FaReact, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiVite, SiZod } from "react-icons/si";
import { BsTypescript, BsFillLayersFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

import { TechStack } from "./techStack"; // adjust path if needed

export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  techStack: TechStack[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Shoe-care",
    description:
      "ShoeCare is a modern shoe care and management platform designed to provide users with an easy way to explore shoe care products, manage services, and maintain their footwear. The platform focuses on delivering a clean, responsive and user-friendly experience with a modern UI and efficient state management.",
    link: "https://shoe-care-three.vercel.app",
    image: "/projects/shoe-care.png",
    techStack: [
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
        title: "Tailwind CSS",
        icon: RiTailwindCssFill,
        color: "text-sky-400",
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
      {
        title: "Git & GitHub",
        icon: FaGithub,
        color: "text-orange-500",
      },
    ],
  },
  {
    id: 2,
    title: "Old Portfolio",
    description:
      "Earlier personal portfolio built with React.js and Vite, styled using Tailwind CSS alongside HTML5 & CSS3. Whereas, highlights my strong interest in frontend development and showcases a clean, responsive UI. While the stack was simpler, it laid the foundation for my progression toward more advanced tools such as Next.js, Zustand, TypeScript and Zod",
    link: "https://sashergurung.github.io/Personal-Portfolio",
    image: "/projects/old-portfolio.png",
    techStack: [
      {
        title: "React.js",
        icon: FaReact,
        color: "text-cyan-400",
      },
      {
        title: "Vite",
        icon: SiVite,
        color: "text-purple-500",
      },
      {
        title: "JavaScript",
        icon: IoLogoJavascript,
        color: "text-yellow-400",
      },
      {
        title: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        title: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-400",
      },
      {
        title: "Git & GitHub",
        icon: FaGithub,
        color: "text-orange-500",
      },
    ],
  },
];

export default projects;
