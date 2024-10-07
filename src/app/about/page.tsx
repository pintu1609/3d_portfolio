"use client"

import Image from "next/image"
import { useEffect, useState } from "react";


export default function About() {
    const titles = ["Full Stack Developer", "UI/UX Developer"];
  const [index, setIndex] = useState(0); // To switch between titles
  const [displayedText, setDisplayedText] = useState(""); // For letter by letter effect
  const [subIndex, setSubIndex] = useState(0); // For tracking the position in the current title
  const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
          const fullText = titles[index];
          
          // Handle typing and deleting
          if (subIndex < fullText.length && !isDeleting) {
            setDisplayedText(prev => prev + fullText[subIndex]);
            setSubIndex(subIndex + 1);
          } else if (isDeleting && subIndex > 0) {
            setDisplayedText(prev => prev.slice(0, -1));
            setSubIndex(subIndex - 1);
          } else if (!isDeleting && subIndex === fullText.length) {
            // Pause before starting to delete
            setTimeout(() => setIsDeleting(true), 1000); // Wait 1s after typing full text
          } else if (isDeleting && subIndex === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % titles.length); // Switch title
          }
        }, isDeleting ? 50 : 150); // Adjust speed for typing and deleting
    
        return () => clearTimeout(timeout);
      }, [subIndex, isDeleting, index]);
    return (
       

                
        <div className=" bg-bg-color h-screen w-full overflow-y-auto">
        <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-[2rem] sm:gap-[5rem] h-full w-4/5 mx-auto h-full ">
            <div className="flex flex-col justify-start gap-2 sm:w-1/2">
                <h3 className="text-2xl text-main-white font-bold">About Me</h3>
                {/* <h1 className="text-5xl text-main-color font-bold">Pintu Kumar</h1> */}
                <h3 className="text-2xl text-main-color font-bold h-[30px]">{displayedText}</h3>
                <p className="text-xl text-main-white text-justify">
                    A passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I specialize in creating scalable and efficient web applications using modern technologies like React, Node.js, and MongoDB. With experience in developing complex systems, from ICU digitization to work management solutions, I thrive on solving problems and building user-friendly, secure platforms. I’m always eager to collaborate, innovate, and create impactful solutions that bridge the gap between technology and users.
                </p>


                <div className="flex space-x-8 sm:mt-4 items-center">
                    <button
                    className="text-sm text-bg-color bg-main-color px-8 py-4 rounded-[25px] shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-none" 
                    

                     >View More</button>

                   

                </div>
            </div>
            <div className="rounded-full border-4 border-main-color overflow-hidden shadow-[0_0_1rem_0_#0ef] transition duration-300 sm:w-1/2 ">
            
                <Image  src="/image/Pintu_Kumar.jpeg" alt="pintu"  className="w-full h-full object-cover"
               width={100} height={100} 
               layout="responsive"/>
            </div>
        </div>
        </div>
       
    )
}