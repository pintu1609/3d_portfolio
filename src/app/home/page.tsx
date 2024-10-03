"use client"
import Link from "next/link";
import './home.css'

export default function Home() {
    return (
        
       
        <div className=" bg-bg-color h-screen w-full ">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-[3rem] sm:gap-[5rem] h-full w-full custom:w-4/5 mx-auto h-full p-4 sm:p-0 ">
            <div className="flex flex-col justify-start gap-2 ">
                <h3 className="text-2xl text-main-white font-bold">Hello i&apos;m</h3>
                <h1 className="text-5xl text-main-color font-bold">Pintu Kumar</h1>
                <h3 className="text-2xl text-main-white font-bold">Full Stack Developer</h3>
                <p className="text-xl text-main-white">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>

                <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 items-start sm:items-center gap-4 sm:gap-0">
                    <button
                    className="text-sm text-bg-color bg-main-color px-8 py-4 rounded-[25px] shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-none" 
                    // style={{
                    //     boxShadow: '0 0 1rem 0 #0ef',
                    //     transition:'.3s'
                    // }}

                     onClick={() => window.open('https://drive.google.com/file/d/164poiHCDq-WMyHqZEN39cB_UZut96yDM/view')}>Download CV</button>

                    <div className="flex space-x-4">
                    <Link href="https://github.com/pintu1609" passHref className="group flex items-center justify-center relative border border-main-color p-2 rounded-full h-[50px] w-[50px] hover:bg-main-color">
                    <i className='bx bxl-github text-2xl text-main-color group-hover:text-bg-color'></i>
                    <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap py-[4px] px-[4px]">
                    Github
                            </span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/pintu-kumar-46b147204/" passHref className="group flex items-center justify-center relative border border-main-color p-2 rounded-full h-[50px] w-[50px] hover:bg-main-color">
                        <i className='bx bxl-linkedin text-2xl text-main-color group-hover:text-bg-color'></i>
                        <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap py-[4px] px-[4px]">
                        Linkedin
                            </span>
                        </Link>
                        <Link href="https://x.com/Pintu_Kumar_24" passHref className="group flex items-center justify-center relative border border-main-color p-2 rounded-full h-[50px] w-[50px] hover:bg-main-color">
                        <i className='bx bxl-twitter text-2xl text-main-color group-hover:text-bg-color'></i>
                        <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap py-[4px] px-[4px]">
                        Twitter
                            </span>
                        </Link>
                        <Link href="https://www.instagram.com/pintu_kumar_29/" passHref className="group flex items-center justify-center relative border border-main-color p-2 rounded-full h-[50px] w-[50px] hover:bg-main-color">
                        <i className='bx bxl-instagram text-2xl text-main-color group-hover:text-bg-color'></i>
                        <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap py-[4px] px-[4px]">
                        Instagram
                            </span>
                        </Link>
                        <Link href="mailto:pintukumar160900@gmail.com" passHref className="group flex items-center justify-center relative border border-main-color p-2 rounded-full h-[50px] w-[50px] hover:bg-main-color">
                        <i className='bx bxl-gmail text-2xl text-main-color group-hover:text-bg-color'></i>
                        <span className="tooltips absolute top-[-2rem] left-[50%] transform -translate-x-1/2 rounded-md bg-main-color opacity-0 text-bg-color text-sm whitespace-nowrap py-[4px] px-[4px]">
                        Gmail
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
            <div className="rounded-full border-4 border-main-color overflow-hidden shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-[0_0_3rem_0_#0ef]">
            
                <img src="/image/Pintu_Kumar.jpeg" alt="pintu"  className="w-full h-full object-cover" 
                 />
            </div>
        </div>
        </div>
        

    )
}