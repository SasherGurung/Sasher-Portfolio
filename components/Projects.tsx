import React from "react";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { dm_mono } from "@/app/fonts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProjectsPage() {
  return (
    <section
      id="projects"
      className={`min-h-screen relative ${dm_mono.className} scroll-auto`}
    >
      <GridBackgroundDemo />
      <div className="relative m-10 my-25">
        <h1 className="text-center text-3xl font-extrabold tracking-[0.4em] text-gray-400 mb-5">
          PORTFOLIO SHOWCASE
        </h1>
        <p className="text-center text-base">
          Explore my journey with Projects, Certifications and TechStack.
        </p>
        <div className="flex justify-center border">
        <Tabs defaultValue="overview" className="w-7xl">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <Card className="text-white">
              <CardHeader>
                <CardTitle>Hello</CardTitle>
                <CardDescription>
                  View your key metrics and recent project activity. Track
                  progress across all your active projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>certificates</CardTitle>
                <CardDescription>
                  Track performance and user engagement metrics. Monitor trends
                  and identify growth opportunities.
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
