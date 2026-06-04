import React from "react";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { FaArrowRightLong } from "react-icons/fa6";
import { dm_mono } from "@/app/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProjectsPage() {
  return (
    <section
      id="projects"
      className={`min-h-screen relative ${dm_mono.className} scroll-auto`}
    >
      <GridBackgroundDemo />
      <div className="relative m-10 my-25 ">
        <h1 className="text-center text-3xl font-extrabold tracking-[0.4em] text-gray-400 m-5">
          PORTFOLIO SHOWCASE
        </h1>
        <p className="text-center text-base">
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
                <div className="grid grid-cols-3 gap-5">
                  <div className="border bg-zinc-700 rounded-3xl flex flex-col justify-center items-center">
                    <Image
                      src="/assets/portfolio.png"
                      alt="Portfolio Image"
                      height={100}
                      width={100}
                    ></Image>
                    <h1>Project Name</h1>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis debitis doloremque magnam doloribus distinctio
                      libero, molestias blanditiis praesentium officia ut quae
                      atque sed nulla autem. Modi corrupti aperiam dolores ex.
                    </p>
                    <div className="flex justify-between w-full items-center p-5">
                      <button className="text-white text-base cursor-pointer hover:scale-105 transition-all duration-300">No Link</button>
                      <button className="bg-zinc-400 px-5 py-2 rounded-2xl text-white text-base flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-zinc-500 hover:scale-105 duration-300">
                        Details <FaArrowRightLong />
                      </button>
                    </div>
                  </div>

                  <div className="border bg-zinc-700 rounded-3xl flex flex-col justify-center items-center">
                    <Image
                      src="/assets/portfolio.png"
                      alt="Portfolio Image"
                      height={100}
                      width={100}
                    ></Image>
                    <h1>Project Name</h1>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis debitis doloremque magnam doloribus distinctio
                      libero, molestias blanditiis praesentium officia ut quae
                      atque sed nulla autem. Modi corrupti aperiam dolores ex.
                    </p>
                    <div>
                      <button>No Link</button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-2xl text-white w-[120px] flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-zinc-500 hover:scale-105 duration-300">
                        Details <FaArrowRightLong />
                      </button>
                    </div>
                  </div>

                  <div className="border bg-zinc-700 rounded-3xl flex flex-col justify-center items-center">
                    <Image
                      src="/assets/portfolio.png"
                      alt="Portfolio Image"
                      height={100}
                      width={100}
                    ></Image>
                    <h1>Project Name</h1>
                    <p className="line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Omnis debitis doloremque magnam doloribus distinctio
                      libero, molestias blanditiis praesentium officia ut quae
                      atque sed nulla autem. Modi corrupti aperiam dolores ex.
                    </p>
                    <div>
                      <button>No Link</button>
                      <button className="bg-zinc-400 px-4 py-2 rounded-2xl text-white w-[120px] flex items-center justify-center gap-2 cursor-pointer transition-all hover:bg-zinc-500 hover:scale-105 duration-300">
                        Details <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </div>
                
              </Card>
            </TabsContent>

            <TabsContent value="certificates">
              <Card>
                <CardHeader>
                  <CardTitle>certificates</CardTitle>
                  <CardDescription>
                    Track performance and user engagement metrics. Monitor
                    trends and identify growth opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Page views are up 25% compared to last month.
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tech-stack">
              <Card>
                <CardHeader>
                  <CardTitle>tech-stack</CardTitle>
                  <CardDescription>
                    Generate and download your detailed reports. Export data in
                    multiple formats for analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  You have 5 reports ready and available to export.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
