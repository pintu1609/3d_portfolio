import localFont from "next/font/local";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import './globals.css'; 
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Template from "./template";
import Cube from "@/components/cube";


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



export default function RootLayout() {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Template>
        <Cube />


        </Template>

        <div className="fixed bottom-[2rem] left-[50%] translate-x-[-50%] z-10 animate-nav">
          <Navbar />
        </div>
        <Toaster position="top-right" />

      </body>
    </html>
  );
}
