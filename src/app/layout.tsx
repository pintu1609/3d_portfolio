import localFont from "next/font/local";
import "./globals.css";
import 'boxicons/css/boxicons.min.css';
import './globals.css'; 
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Cube from "@/components/cube";
import { FEATURES } from "../../config/features";


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



export default function RootLayout(
{
  children,
}: {
  children: React.ReactNode;
}

) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Cube /> */}
  {/* ✅ Cube exists but does NOT run */}
        {FEATURES.ENABLE_CUBE && <Cube />}

        {/* ✅ Normal routing */}
        {!FEATURES.ENABLE_CUBE && children}


        <div className="fixed bottom-[8px] sm:bottom-[2rem] left-[50%] translate-x-[-50%] z-10 animate-nav">
          <Navbar />
        </div>
        <Toaster position="top-right" />

      </body>
    </html>
  );
}
