import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { Toaster } from "react-hot-toast";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sasher Gurung - Portfolio",
  description:
    "Portfolio of Sasher Gurung, frontend developer focused on React, Next.js, and clean UI.",
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
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "black",
              color: "#ffffff",
              border: "2px solid rgba(255, 255, 255, 0.5)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
