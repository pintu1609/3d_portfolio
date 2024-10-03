"use client"


export default function About() {
    return (
       

                
        <div className=" bg-bg-color h-screen w-full ">
        <div className="flex flex-col-reverse sm:flex-row-reverse justify-center items-center gap-[3rem] sm:gap-[5rem] h-full w-4/5 mx-auto h-full ">
            <div className="flex flex-col justify-start gap-2 ">
                <h3 className="text-2xl text-main-white font-bold">About Me</h3>
                {/* <h1 className="text-5xl text-main-color font-bold">Pintu Kumar</h1> */}
                <h3 className="text-2xl text-main-color font-bold">Full Stack Developer</h3>
                <p className="text-xl text-main-white">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>

                <div className="flex space-x-8 mt-4 items-center">
                    <button
                    className="text-sm text-bg-color bg-main-color px-8 py-4 rounded-[25px] shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-none" 
                    

                     >View More</button>

                   

                </div>
            </div>
            <div className="rounded-full border-4 border-main-color overflow-hidden shadow-[0_0_1rem_0_#0ef] transition duration-300">
            
                <img src="/image/Pintu_Kumar.jpeg" alt="pintu"  className="w-full h-full object-cover" 
                 />
            </div>
        </div>
        </div>
       
    )
}