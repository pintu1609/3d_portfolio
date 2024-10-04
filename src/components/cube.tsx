"use client";
import { useEffect, useState } from "react";
import Home from "@/app/home/page";
import About from "@/app/about/page";
import Portfolio from "@/app/portfolio/page";
import Resume from "@/app/resume/page";
import Contact from "@/app/contact/page";
import { usePathname } from "next/navigation";

const Cube = () => {
  const currentPath = usePathname();
  console.log("🚀 ~ Cube ~ path:", currentPath)
  
  const [contactClass, setContactClass] = useState<string>("active"); // Start with 'active' class for contact

  useEffect(() => {
    // Remove 'active' class after 1.5 seconds
    const timer = setTimeout(() => {
      setContactClass("");
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Add 'action-contact' class when not on home page
  const contactPageClass = currentPath === "/contact"
    ? "active"
    : currentPath !== "/home"
    ? "action-contact"
    : "";

  return (
    <div className="cube">
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
      <div className={`face contact ${contactClass} ${contactPageClass}`}>
        <Contact />
      </div>
    </div>
  );
};

export default Cube;
