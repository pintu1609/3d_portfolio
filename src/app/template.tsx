"use client";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// Sample navigation array (navs) to simulate the `idx` logic
const navs = ["/home", "/about", "/resume", "/portfolio", "/contact"];

const Template = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();
  const [rotation, setRotation] = useState(0); // Cube rotation state
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  useEffect(() => {
    // Find the current index of the currentPath
    const currentIndex = navs.indexOf(currentPath);
    
    if (currentIndex !== -1) {
      // Calculate rotation based on index (-90 degrees for each step)
      const newRotation = currentIndex * -90;
      
      setRotation(newRotation); // Set rotation based on index
      setIsTransitioning(true); // Start the transition

      // Optional: Wait for the rotation animation to complete before further changes
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // End transition
      }, 3000); // Match the timeout with your animation duration

      return () => clearTimeout(timeout); // Cleanup the timeout
    }
  }, [currentPath]);

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     perspective: "1000px",
    //     overflow: "hidden",
    //   }}
    // >
      <motion.div
        style={{
         
          transformStyle: "preserve-3d",
          position: "relative",
          transform: `rotateY(${rotation}deg)`, // Rotate based on index
          transformOrigin: "50% 50% -50vw",
          transition: "transform 3s ease", // Smooth rotation transition
        }}
      >
        {children}
      </motion.div>
  );
};

export default Template;
