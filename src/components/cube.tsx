"use client"
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Home from "@/app/home/page";
import Portfolio from "@/app/portfolio/page";
import Resume from "@/app/resume/page";

export default function Cube() {
   
    return (
        <div className='cube'>
        <div className="face front ">
          <Home/>
        </div>
        <div className="face right">
          <About/>
          </div>
           <div className="face back">
            <Resume/>
          </div>
         <div className="face left">
            <Portfolio/>
          </div>
          <div className="face top">
            <Contact/>
          </div>
          </div>
    );
}