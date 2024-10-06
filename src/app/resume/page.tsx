"use client"
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skill from "@/components/resume/Skill";
import { useState } from "react";

export default function Resume() {
    const [activeTab, setActiveTab] = useState('experince');
    return (

     

        <div className="bg-bg-color h-screen w-full">
        <div className="flex justify-center  py-8 ">
        <div className="flex flex-col items-center w-4/5 gap-[2rem]">

        
        <h2 className="text-3xl text-main-white font-bold">Resume</h2>

        <div className="flex flex-col justify-start gap-4 w-full">
            <div className="flex justify-between w-full">

            
            <h3 className={`text-xl  font-bold ${activeTab === 'experince' ? 'text-main-color' : 'text-tab-list-color'} cursor-pointer`} onClick={() => setActiveTab('experince')}>Experience</h3>
            <h3 className={`text-xl  font-bold ${activeTab === 'skills' ? 'text-main-color' : 'text-tab-list-color'} cursor-pointer `} onClick={() => setActiveTab('skills')}>Skills</h3>
            <h3 className={`text-xl  font-bold ${activeTab === 'education' ? 'text-main-color' : 'text-tab-list-color'} cursor-pointer `} onClick={() => setActiveTab('education')}>Education</h3>
            </div>
            <div className="flex w-full h-[.2rem]">
                            <div className={`flex-1 ${activeTab === 'experince' ? 'bg-main-color' : 'bg-tab-list-color'} cursor-pointer`}  onClick={() => setActiveTab('experince')}/>
                            <div className={`flex-1 ${activeTab === 'skills' ? 'bg-main-color' : 'bg-tab-list-color'} cursor-pointer`}  onClick={() => setActiveTab('skills')}/>
                            <div className={`flex-1 ${activeTab === 'education' ? 'bg-main-color' : 'bg-tab-list-color'} cursor-pointer`} onClick={() => setActiveTab('education')} />
             </div>

             <div className="overflow-y-auto  " style={{height:`calc(100vh - 16rem)`}}>


            {activeTab === 'experince' && <Experience />}
            {activeTab === 'skills' && <Skill />}
            {activeTab === 'education' && <Education />}

            </div>

        </div>

        </div>
        </div>
        </div>

       
    
    );

}