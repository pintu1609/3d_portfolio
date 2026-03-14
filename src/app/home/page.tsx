"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const titles = [
  "Full Stack Developer",
  "MERN Developer",
  "AI / NLP Developer"
];
export default function Home() {
  

  const [index,setIndex] = useState(0);
  const [displayedText,setDisplayedText] = useState("");
  const [subIndex,setSubIndex] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);

  useEffect(()=>{

    const timeout = setTimeout(()=>{

      const fullText = titles[index];

      if(!isDeleting && subIndex < fullText.length){
        setDisplayedText(prev=>prev + fullText[subIndex]);
        setSubIndex(subIndex + 1);
      }

      else if(isDeleting && subIndex > 0){
        setDisplayedText(prev=>prev.slice(0,-1));
        setSubIndex(subIndex - 1);
      }

      else if(!isDeleting && subIndex === fullText.length){
        setTimeout(()=>setIsDeleting(true),1200);
      }

      else if(isDeleting && subIndex === 0){
        setIsDeleting(false);
        setIndex((prev)=>(prev+1)%titles.length);
      }

    },isDeleting ? 60 : 120);

    return ()=>clearTimeout(timeout);

  },[subIndex,isDeleting,index]);


  return (

<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] text-white px-4 py-4 md:px-6 md:py-0">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 mb-16 md:mb-0">

{/* RIGHT IMAGE (TOP IN MOBILE) */}

<div className="flex justify-center order-1 md:order-2">

<div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[520px] md:h-[520px]">

<div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>

<div className="relative w-full h-full rounded-full border-[4px] md:border-[5px] border-cyan-400 overflow-hidden">

<Image
src="/image/professional image.png"
alt="Pintu Kumar"
fill
className="object-fill"
priority
/>

</div>

</div>

</div>


{/* LEFT CONTENT */}

<div className="space-y-5 order-2 md:order-1 text-center md:text-left">

<p className="text-gray-400 text-base md:text-lg">
Hello I&apos;m
</p>

<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400">
Pintu Kumar
</h1>

<h2 className="text-xl md:text-2xl font-semibold text-white h-[32px]">
{displayedText}
<span className="animate-pulse">|</span>
</h2>

<p className="text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-sm md:text-base">

A Full-Stack Engineer specialized in

<span className="text-cyan-400 font-semibold">
 MERN / Next.js
</span>

 focused on building scalable data-driven products and integrating

<span className="text-cyan-400 font-semibold">
 AI / NLP systems
</span>

 to create real-world impact.

</p>


{/* BUTTONS */}

<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-3">

<button
onClick={()=>window.open("https://drive.google.com/file/d/1gwtpz0ot7IOY26uofoFrMkU77R1qAWN5/view")}
className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
>
Download CV
</button>

<Link
href="/contact"
className="border border-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-black transition"
>
Contact Me
</Link>

</div>


{/* SOCIAL ICONS */}

<div className="flex gap-4 pt-4 justify-center md:justify-start text-xl text-cyan-400">

<Link href="https://github.com/pintu1609" target="_blank">
<i className="bx bxl-github hover:text-white transition"></i>
</Link>

<Link href="https://www.linkedin.com/in/pintu-kumar-46b147204/" target="_blank">
<i className="bx bxl-linkedin hover:text-white transition"></i>
</Link>

<Link href="https://x.com/Pintu_Kumar_24" target="_blank">
<i className="bx bxl-twitter hover:text-white transition"></i>
</Link>

<Link href="https://www.instagram.com/pintu_kumar_29/" target="_blank">
<i className="bx bxl-instagram hover:text-white transition"></i>
</Link>

<Link href="mailto:pintukumar160900@gmail.com">
<i className="bx bxl-gmail hover:text-white transition"></i>
</Link>

</div>


{/* TECH STACK */}

<div className="flex flex-wrap gap-4 pt-5 justify-center md:justify-start text-gray-400 text-xs md:text-sm">

<span>React</span>
<span>Next.js</span>
<span>Node.js</span>
<span>MongoDB</span>
<span>AWS</span>

</div>

</div>

</div>

</section>

  );
}