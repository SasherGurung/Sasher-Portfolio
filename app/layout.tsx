import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import GridBackgroundDemo from "@/components/ui/grid-background-demo"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Sasher Gurung - Portfolio",
  description: "Portfolio of Sasher Gurung, frontend developer focused on React, Next.js, and clean UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col text-white">
        <GridBackgroundDemo />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
