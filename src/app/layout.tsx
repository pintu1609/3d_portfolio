import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Pintu Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  
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
         

        <main className="flex-grow transition-delay-500">
      <Toaster position="top-right" />


        {children}
        </main>
       
          

        <div className="fixed bottom-[2rem] left-[50%] translate-x-[-50%] z-10">

        <Navbar/>
        </div>
        </div>
    </Template>
      </body>
    </html>
  );
}
