"use client";
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const rotationMap: Record<string, Record<string, number>> = {
  "/home": {
    "/about": -90,
    "/resume": -180,
    "/portfolio": -270,
    "/contact": -360
  },
  "/about": {
    "/home": 90,
    "/resume": -90,
    "/portfolio": -180,
    "/contact": -270
  },
  "/resume": {
    "/home": 180,
    "/about": 90,
    "/portfolio": -90,
    "/contact": -180
  },
  "/portfolio": {
    "/home": 270,
    "/about": 180,
    "/resume": 90,
    "/contact": -90
  },
  "/contact": {
    "/home": 360,
    "/about": 270,
    "/resume": 180,
    "/portfolio": 90
  },
};

const Template = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [prevPath, setPrevPath] = useState(currentPath);
  const [rotation, setRotation] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (prevPath !== currentPath) {
      const rotationChange = rotationMap[prevPath]?.[currentPath] || 0;
      // Increment the rotation, so it adds to the previous rotation value
      setRotation((prevRotation) => prevRotation + rotationChange); 
      
      setIsTransitioning(true); // Start the transition

      // Wait for the rotation animation to complete before changing the route
      const timeout = setTimeout(() => {
        setPrevPath(currentPath); // Update the path after the animation
        setIsTransitioning(false); // End transition state
      }, 3000); // Match the timeout with your animation duration

      return () => clearTimeout(timeout); // Cleanup the timeout
    }
  }, [currentPath, prevPath]);

  return (
    <div
      style={{
        width: "100vw",
        // height: "100vh",
        perspective: "1000px",
        overflow: "hidden",
      }}
      className='cuberoute'
    >
      <motion.div
        style={{
          width: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
          transform: `rotateY(${rotation}deg)`,
          //  transform: `rotateY(90deg)`,

          transformOrigin: "50% 50% -50vw",
          transition: 'transform 3s ease', // Smooth transition
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Template;
