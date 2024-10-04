"use client";
import localFont from "next/font/local";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import './globals.css'; 
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import About from "./about/page";
import Resume from "./resume/page";
import Portfolio from "./portfolio/page";
import Home from "./home/page";
import Template from "./template";
import Contact from "./contact/page";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname(); // Get the current path
  const [prevPath, setPrevPath] = useState<string | null>(null); // Track the previous path
  const [contactClass, setContactClass] = useState<string>("active"); // Start with 'active' class for contact

  useEffect(() => {
    setPrevPath(currentPath); // Update previous path when currentPath changes

    // After 1.5 seconds, remove the 'active' class
    const timer = setTimeout(() => {
      setContactClass(""); // Remove the 'active' class after 1.5 seconds
    }, 1500);

    // Cleanup the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  // Logic for adding 'action-contact' class when not on home page
  const contactPageClass = currentPath === "/contact"
    ? "active" // Add 'active' class if we are on the contact page
    : currentPath !== "/home"
    ? "action-contact" // Add 'action-contact' if we are not on home
    : ""; // No class if on home

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Template>
          <div className="cube">
            <Toaster position="top-right" />

            <div className="face front">
              <Home />
            </div>
            <div className="face left">
              <Portfolio />
            </div>
            <div className="face back">
              <Resume />
            </div>
            <div className="face right">
              <About />
            </div>

            {/* 'contact' face with dynamic class change */}
            <div className={`face contact ${contactClass} ${contactPageClass}`}>
              <Contact />
            </div>

          </div>
        </Template>

        <div className="fixed bottom-[2rem] left-[50%] translate-x-[-50%] z-10">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
