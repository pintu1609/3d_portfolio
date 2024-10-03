import React from 'react';
import './workItem.css';

interface WorkItemProps {
    item: {
        image: string;
        title: string;
        duration: string;
        body: string;
        tools: string;
        preview?: string; // Optional
        projectlink?: string; // Optional
    };
}

const WorkItem: React.FC<WorkItemProps> = ({ item }) => {
    return (
        <div className="relative group"> {/* Keep the group class for hover effects */}
            <div className="rounded-md h-[16rem] overflow-hidden duration-300">
                <img
                    src={item?.image}
                    alt="img"
                    className="transition-transform duration-300 group-hover:scale-[1.1] w-full h-full"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-third-bg-color rounded-md opacity-0 group-hover:opacity-90 transition-opacity duration-300"> {/* Opacity is controlled by hover */}
                <div className="flex flex-col justify-start gap-2 p-4 rounded-md w-full h-full"> {/* Change h-[16rem] to h-full */}
                    <h3 className="flex items-center gap-[2px] text-xl text-main-white font-bold">
                        {item?.title ? item?.title.slice(0, 25) + (item?.title.length > 30 ? '...' : '') : 'No title available'}
                    </h3>
                    <p className="flex items-center gap-2 text-xl text-main-white">{item?.duration}</p>
                    <p className="text-sm text-main-white text-justify line-clamp-3">
                        {item?.body}
                    </p>
                    <p className="text-sm text-main-color">
                        {item?.tools}
                    </p>
                    <div className="w-full h-[1px] bg-main-white"></div>
                    <div className="flex align-center gap-2">
                        <div className="flex items-center justify-center bg-main-white rounded-full h-[2.5rem] w-[2.5rem] hover:bg-main-color relative preview-group cursor-pointer" onClick={() => window.open(item?.preview)}>
                            <i className='bx bx-arrow-back text-2xl rotate-[135deg]'></i>
                            <span className="absolute top-[-2rem] left-[30%] transform -translate-x-[30%] py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap pointer-events-none">Preview</span>
                        </div>
                        {item?.projectlink && (
                            <div className="flex items-center justify-center bg-main-white rounded-full h-[2.5rem] w-[2.5rem] hover:bg-main-color relative github-group cursor-pointer" onClick={() => window.open(item?.projectlink)}>
                                <i className='bx bxl-github text-2xl'></i>
                                <span className="absolute top-[-2rem] left-[50%] transform -translate-x-1/2 py-[0.2rem] px-[0.5rem] rounded-md bg-main-color opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap pointer-events-none">Github Repository</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkItem;
