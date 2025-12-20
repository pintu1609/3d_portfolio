"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const titles = ["Full Stack Developer", "UI/UX Developer"];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = titles[index];

      if (!isDeleting && subIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[subIndex]);
        setSubIndex(subIndex + 1);
      } else if (isDeleting && subIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setSubIndex(subIndex - 1);
      } else if (!isDeleting && subIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, isDeleting ? 60 : 140);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <div className="bg-bg-color h-screen w-full flex items-center justify-center">

      <div className="h-[85vh] p-4 sm:p-8 overflow-y-auto">
         <section className="sm:h-full flex items-center justify-center   ">

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="sm:w-1/2 flex justify-center">
            <div className="w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full border-4 border-main-color overflow-hidden shadow-[0_0_1rem_0_#0ef] hover:shadow-[0_0_3rem_0_#0ef] transition">
             <Image
                src="/image/Pintu_Kumar.jpeg"
                alt="Pintu Kumar"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left sm:w-1/2 md:pr-16">
          <h3 className="text-xl sm:text-2xl text-main-white font-bold">
             About Me
           </h3>

           <h3 className="text-lg sm:text-2xl text-main-color font-bold h-[32px]">
            {displayedText}
           </h3>

           <p className="text-base sm:text-lg text-main-white leading-relaxed text-justify">
             A passionate Full-Stack Developer with a strong foundation in both
              frontend and backend technologies. I specialize in building
             scalable and efficient web applications using modern stacks like{" "}
              <span className="text-title-color font-semibold">
               Next.js, React, Node.js, and MongoDB
              </span>
              .
              <br /><br />
               With experience ranging from ICU digitization systems to work
            management platforms and{" "}
            <span className="text-title-color font-semibold">
              AI/NLP-powered data-driven solutions
            </span>
            , I enjoy solving complex technical challenges while crafting
            clean, user-friendly, and secure products that deliver{" "}
            <span className="text-title-color font-semibold">
              measurable business impact
             </span>
              .
           </p>

            <div className="mt-6 flex justify-center sm:justify-start">
              <button className="text-sm text-bg-color bg-main-color px-8 py-3 rounded-full shadow-[0_0_1rem_0_#0ef] transition hover:shadow-none">
                 View More
             </button>
            </div>
          </div>

        </div>


         </section>


      </div>


    </div>


  )}