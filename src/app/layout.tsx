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
import Home from "./page";
import Template from "./template";
import Contact from "./contact/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metsdata";


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
  
  
  let activeFace;
  switch (currentPath) {
    case "/home":
      activeFace = <div className="face front">{children}</div>;
      break;
    case "/about":
      activeFace = <div className="face left">{children}</div>;
      break;
    case "/resume":
      activeFace = <div className="face back">{children}</div>;
      break;
    case "/portfolio":
      activeFace = <div className="face right">{children}</div>;
      break;
    case "/contact":
      activeFace = <div className="face contact active">{children}</div>;
      break;
    // default:
    //   activeFace = <div className="face front">{children}</div>; // Default to front if path doesn't match
  }

  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >


    <Template>
        <div className='cube'>

        <div className="face front ">
        <Home/>
        </div>
        <div className="face right">
        <Portfolio/>

          </div>
           <div className="face back">
            <Resume/>
          </div>

         <div className="face left ">
         <About/>

          </div>
          <div className={`face contact ${currentPath === "/contact" ? "active" : ""}`}>
            <Contact/>
          </div>
         

        <main className="flex-grow transition-delay-500 overflow-auto">
      <Toaster position="top-right" />


      {children}
      </main>
       
          

        </div>
    </Template>
        <div className="fixed bottom-[2rem] left-[50%] translate-x-[-50%] z-10">

        <Navbar/>
        </div>
      </body>
    </html>
  );
}