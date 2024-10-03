"use client"
import MyWork from "@/components/portfolio/MyWork";
import Myservices from "@/components/portfolio/MyService";
import { useState } from "react";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState('mywork');
    return (
        <div className="bg-bg-color min-h-screen w-full">
        <div className="flex justify-center py-8 ">
        <div className="flex flex-col items-center w-4/5 gap-[2rem]">

        
        <h2 className="text-3xl text-main-white font-bold">Portfolio</h2>

        <div className="flex flex-col justify-start gap-4 w-full">
            <div className="flex justify-between w-full">

            
            <h3 className={`text-xl  font-bold ${activeTab === 'mywork' ? 'text-main-color' : 'text-tab-list-color'} cursor-pointer`} onClick={() => setActiveTab('mywork')}>My Work</h3>
            <h3 className={`text-xl  font-bold ${activeTab === 'myservices' ? 'text-main-color' : 'text-tab-list-color'} cursor-pointer `} onClick={() => setActiveTab('myservices')}>My Services</h3>
            </div>
            <div className="flex w-full h-[.2rem]">
                            <div className={`flex-1 ${activeTab === 'mywork' ? 'bg-main-color' : 'bg-tab-list-color'} cursor-pointer`} onClick={() => setActiveTab('mywork')} />
                            <div className={`flex-1 ${activeTab === 'myservices' ? 'bg-main-color' : 'bg-tab-list-color'} cursor-pointer`} onClick={() => setActiveTab('myservices')} />
             </div>


            {activeTab === 'mywork' && <MyWork/>}
            {activeTab === 'myservices' && <Myservices />}

        </div>

        </div>
        </div>
        </div>
    
    );

}