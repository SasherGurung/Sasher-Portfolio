export type Project = {
  title: string;
  details: string;
  description: string;
  link: string;
  image: string;
};

export const projects: Project[] = [
    {
      title: "Shoe-care",
      details: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://shoe-care.vercel.app",
      image: "/projects/shoe-care.png",
    },
    {
      title: "Project Name",
      details: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://www.google.com",
      image: "",
    },
  ];

export default projects;
