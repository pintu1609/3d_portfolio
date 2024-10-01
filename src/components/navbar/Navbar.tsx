"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './navbar.css';

export default function Navbar() {
    const pathname = usePathname();
    return (
      <div className="bg-nav-bg-color flex justify-center px-8 py-[12px] rounded-[30px] w-[300px]">
        <nav className="nav-list text-white text-2xl flex justify-center relative">
          <ul className="flex space-x-8">
            <li className="h-[24px] relative">
              <Link href="/home" passHref className="nav-link">
                <i className={`${pathname === '/home' ? 'text-main-color' : ''} hover:text-main-color bx bx-home-alt nav-icon`}></i>
                <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap">
                  Home
                </span>
              </Link>
            </li>
            <li className="h-[24px] relative">
              <Link href="/about" passHref className="nav-link">
                <i className={`${pathname === '/about' ? 'text-main-color' : ''} hover:text-main-color bx bx-user`}></i>
                <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap">
                  About
                </span>
              </Link>
            </li>
            <li className="h-[24px] relative">
              <Link href="/resume" passHref className="nav-link">
                <i className={`${pathname === '/resume' ? 'text-main-color' : ''} hover:text-main-color bx bx-detail`}></i>
                <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap">
                  Resume
                </span>
              </Link>
            </li>
            <li className="h-[24px] relative">
              <Link href="/portfolio" passHref className="nav-link">
                <i className={`${pathname === '/portfolio' ? 'text-main-color' : ''} hover:text-main-color bx bx-briefcase`}></i>
                <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap">
Portfolio                </span>
              </Link>
            </li>
            <li className="h-[24px] relative">
              <Link href="/contact" passHref className="nav-link">
                <i className={`${pathname === '/contact' ? 'text-main-color' : ''} hover:text-main-color bx bx-envelope `}></i>
                <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}
