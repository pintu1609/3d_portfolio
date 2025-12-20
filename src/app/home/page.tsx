"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
// import "./home.css";

export default function Home() {
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

      <div className="scroll-area h-[85vh] p-4 md:p-32 overflow-y-auto flex items-center justify-center">
          <div className="sm:h-full flex flex-col sm:flex-row-reverse sm:items-center  gap-4">

          <div className="sm:w-1/2 flex justify-center">

            <div className="w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full border-4 border-main-color overflow-hidden shadow-[0_0_1rem_0_#0ef] hover:shadow-[0_0_3rem_0_#0ef] transition">
              <Image
                src="/image/Pintu_Kumar.jpeg"
                alt="Pintu Kumar"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center sm:text-left sm:w-1/2">
            <h3 className="text-xl sm:text-2xl text-main-white font-bold">
              Hello I&apos;m
            </h3>

            <h1 className="text-3xl sm:text-5xl text-main-color font-bold">
              Pintu Kumar
            </h1>

            <h3 className="text-lg sm:text-2xl text-title-color font-bold h-[32px]">
              {displayedText}
            </h3>

            <p className="text-base sm:text-lg text-main-white leading-relaxed">
              A Full-Stack Engineer{" "}
              <span className="text-title-color font-bold underline">
                MERN / Next.js
              </span>{" "}
              focused on building data-driven products. I develop scalable
              full-stack solutions and integrate AI/NLP models to create
              measurable social and technical impact.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center mt-6">
              <button
                className="w-full sm:w-auto text-sm text-bg-color bg-main-color px-8 py-3 rounded-full shadow-[0_0_1rem_0_#0ef] transition hover:shadow-none"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gwtpz0ot7IOY26uofoFrMkU77R1qAWN5/view"
                  )
                }
              >
                Download CV
              </button>

              {/* SOCIAL ICONS */}
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {[
                  {
                    href: "https://github.com/pintu1609",
                    icon: "bxl-github",
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/pintu-kumar-46b147204/",
                    icon: "bxl-linkedin",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/Pintu_Kumar_24",
                    icon: "bxl-twitter",
                    label: "Twitter",
                  },
                  {
                    href: "https://www.instagram.com/pintu_kumar_29/",
                    icon: "bxl-instagram",
                    label: "Instagram",
                  },
                  {
                    href: "mailto:pintukumar160900@gmail.com",
                    icon: "bxl-gmail",
                    label: "Gmail",
                  },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    className="group relative flex items-center justify-center border border-main-color rounded-full w-[48px] h-[48px] hover:bg-main-color transition"
                  >
                    <i
                      className={`bx ${item.icon} text-xl text-main-color group-hover:text-bg-color`}
                    ></i>
                    <span className="tooltips absolute -top-8 left-1/2 -translate-x-1/2 bg-main-color text-bg-color text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}