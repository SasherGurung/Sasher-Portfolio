"use client";

import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { dm_mono } from "@/app/fonts";
import { FiArrowUpRight } from "react-icons/fi";

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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { projects } from "@/src/data/projects";
import { certificates } from "@/src/data/certificates";
import { techStack } from "@/src/data/techStack";

function ProjectsPage() {
  return (
    <section
      id="projects"
      className={`min-h-screen relative ${dm_mono.className} flex justify-center items-center`}
    >
      <GridBackgroundDemo />
      <div className="relative">
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
            <TabsContent value="projects" className="min-h-100">
              <Card className="bg-transparant">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50"
                    >
                      <CardContent className="px-5">
                        <Image
                          src={project.image || "/assets/portfolio.png"}
                          alt={project.title}
                          width={500}
                          height={250}
                          className="w-full h-50 object-cover"
                          priority
                        />
                      </CardContent>

                      <CardHeader>
                        <CardTitle className="text-white tracking-wide text-lg">
                          {project.title}
                        </CardTitle>

                        <CardDescription className="line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 pt-2 w-md">
                          {project.techStack.map((tech, index) => (
                            <div
                              key={`${project.id}-${index}`}
                              className="flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 hover:bg-white/20 cursor-pointer"
                            >
                              <span className="text-xs ">
                                <tech.icon />
                              </span>
                              <span>{tech.title}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-end">
                        <Link
                          href={project.link}
                          className="bg-zinc-900 px-4 py-2 rounded-xl flex items-center gap-1 
                            text-white border border-zinc-700 hover:bg-white hover:text-zinc-900 
                            transition-all duration-300 cursor-pointer text-md"
                        >
                          Visit
                          <FiArrowUpRight className="text-lg" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="certificates" className="min-h-100">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {certificates.map((certi) => (
                  <Dialog key={certi.title}>
                    <DialogTrigger asChild>
                      <Card className="bg-black/30 border border-white/40 rounded-3xl overflow-hidden hover:bg-black/50 cursor-pointer">
                        <CardContent className="px-5">
                          <Image
                            src={certi.image}
                            alt={certi.title}
                            width={500}
                            height={250}
                            className="w-full h-50 object-cover rounded-xl"
                            priority
                          />
                        </CardContent>
                        <CardHeader>
                          <CardTitle
                            className={`text-white text-center tracking-wide text-lg ${dm_mono.className}`}
                          >
                            {certi.title}
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </DialogTrigger>

                    <DialogContent className="max-w-2xl bg-black/90 p-2 border-white/20">
                      <Image
                        src={certi.image}
                        width={900}
                        height={900}
                        alt="Certificate"
                        className="w-auto h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tech-stack" className="min-h-100">
              <Card className="bg-transparent">
                <div className="grid grid-cols-6 gap-15 max-w-full">
                  {techStack.map((tech) => (
                    <Card
                      key={tech.title}
                      className="bg-black/30 border border-white/40 rounded-2xl hover:bg-black/50 cursor-pointer hover:scale-105 transition-all duration-300z`"
                    >
                      <CardContent className="flex flex-col items-center justify-center py-4 gap-2">
                        <div className={`text-5xl ${tech.color}`}>
                          <tech.icon />
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
