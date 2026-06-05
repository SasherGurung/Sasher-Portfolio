import React from "react";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { BsTypescript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { dm_mono } from "@/app/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProjectsPage() {
  const techStack = [
    {
      title: "React.js",
      icon: <FaReact />,
      color: "text-cyan-400",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      color: "text-white",
    },
    {
      title: "TypeScript",
      icon: <BsTypescript />,
      color: "text-blue-500",
    },
    {
      title: "JavaScript",
      icon: <IoLogoJavascript />,
      color: "text-yellow-400",
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill />,
      color: "text-sky-400",
    },
    {
      title: "HTML",
      icon: <FaHtml5 />,
      color: "text-orange-500",
    },
    {
      title: "CSS",
      icon: <FaCss3Alt />,
      color: "text-blue-400",
    },
    {
      title: "Git",
      icon: <FaGithub  />,
      color: "text-orange-500",
    },
  ];

  return (
    <section
      id="projects"
      className={`min-h-screen relative ${dm_mono.className} scroll-auto`}
    >
      <GridBackgroundDemo />
      <div className="relative mt-30">
        <h1 className="text-center text-3xl font-extrabold tracking-[0.4em] text-gray-400">
          PORTFOLIO SHOWCASE
        </h1>
        <p className="text-center text-base m-5">
          Explore my journey with Projects, Certifications and TechStack.
        </p>
        <div className="flex justify-center">
          <Tabs defaultValue="projects">
            <TabsList className="w-full bg-transparent rounded-4xl py-7 px-4 border border-gray-500 backdrop-blur-2xl">
              <TabsTrigger value="projects" className="cursor-pointer">
                Projects
              </TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <Card className="bg-transparant">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card className="bg-transparant">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                  <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50">
                    <CardContent className="px-5">
                      <Image
                        src="/assets/portfolio.png"
                        alt="Portfolio Image"
                        width={500}
                        height={250}
                        className="w-full h-50 object-cover"
                        priority
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-white tracking-wide text-lg">
                        Project Name
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Omnis debitis doloremque magnam doloribus
                        distinctio libero, molestias blanditiis praesentium
                        officia ut.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between">
                      <button className="text-md cursor-pointer">
                        No Link
                      </button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-xl flex items-center gap-2 border-gray-100 hover:bg-zinc-500 transition-all cursor-pointer text-md">
                        Details <FaArrowRightLong />
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="tech-stack">
              <Card className="bg-transparent">
                <div className="grid grid-cols-6 gap-15 max-w-8xl mx-auto">
                  {techStack.map((tech) => (
                    <Card
                      key={tech.title}
                      className="bg-black/30 border border-white/40 rounded-2xl hover:bg-black/50 cursor-pointer hover:scale-105 transition-all duration-300z`"
                    >
                      <CardContent className="flex flex-col items-center justify-center py-4 gap-2">
                        <div className={`text-5xl ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <p className="text-sm text-white">{tech.title}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
