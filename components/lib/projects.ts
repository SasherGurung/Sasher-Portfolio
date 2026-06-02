export type Project = {
  id: number;
  name: string;
  img: string;
  description: string;
  tools: string[];
  live: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Personal Portfolio",
    img: "/assets/portfolio.png",
    description:
      "A responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcases my skills, projects, and contact information.",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    live: "#home",
  },
  {
    id: 2,
    name: "More Projects Coming Soon",
    img: "/assets/work-in-progress-TvH1UljA.png",
    description:
      "I am currently building new frontend projects. Check back soon for live demos.",
    tools: ["React", "JavaScript", "CSS"],
    live: "#projects",
  },
];

export default projects;
