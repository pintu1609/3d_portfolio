"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const titles = ["Full Stack Developer","MERN Developer","AI / NLP Developer"];
export default function About() {


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

<section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white px-4 py-8  md:px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-8 md:mb-0">

{/* IMAGE */}

<div className="flex justify-center order-1 md:order-none">

<div className="relative w-[260px] h-[320px] sm:w-[320px] sm:h-[420px] md:w-[420px] md:h-[520px]">

<div className="absolute inset-0 rounded-[50%/60%] bg-cyan-400 blur-3xl opacity-20"></div>

<div className="relative w-full h-full rounded-[50%/60%] overflow-hidden border-[4px] md:border-[5px] border-cyan-400 shadow-[0_0_60px_#22d3ee]">

<Image
src="/image/professional image.png"
alt="Pintu Kumar"
fill
className="object-cover"
priority
/>

</div>

</div>

</div>


{/* TEXT */}

<div className="space-y-6 text-center md:text-left order-2 md:order-none">

<h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
About Me
</h2>

<h3 className="text-xl md:text-2xl font-semibold h-[32px]">
{displayedText}
<span className="animate-pulse">|</span>
</h3>


<p className="text-gray-300 leading-relaxed text-sm md:text-base">

I am a passionate <span className="text-cyan-400 font-semibold">
Full-Stack Developer
</span> specializing in building scalable,
high-performance applications using modern technologies like

<span className="text-cyan-400 font-semibold">
 React, Next.js, Node.js and MongoDB
</span>.

<br/><br/>

My experience includes developing enterprise platforms,
ICU digitization systems, and AI/NLP driven solutions.

I enjoy solving complex technical challenges while designing
clean, scalable and user-friendly applications.

</p>


{/* STATS */}

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">

<div className="bg-[#020617] border border-cyan-400 rounded-xl p-5 text-center shadow-lg">

<h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
2+
</h3>

<p className="text-gray-400 text-sm">
Years Experience
</p>

</div>


<div className="bg-[#020617] border border-cyan-400 rounded-xl p-5 text-center shadow-lg">

<h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
10+
</h3>

<p className="text-gray-400 text-sm">
Projects
</p>

</div>


<div className="bg-[#020617] border border-cyan-400 rounded-xl p-5 text-center shadow-lg">

<h3 className="text-2xl md:text-3xl font-bold text-cyan-400">
5+
</h3>

<p className="text-gray-400 text-sm">
Technologies
</p>

</div>

</div>


{/* BUTTON */}

<div className="pt-4">

<button
className="bg-cyan-400 text-black font-semibold px-6 md:px-8 py-3 rounded-full hover:scale-105 transition"
onClick={() =>
window.open(
"https://drive.google.com/file/d/1gwtpz0ot7IOY26uofoFrMkU77R1qAWN5/view"
)
}
>

View Resume

</button>

</div>

</div>

</div>

</section>

  );
}