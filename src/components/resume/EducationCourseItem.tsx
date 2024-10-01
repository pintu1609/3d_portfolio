import React from "react";

interface EducationCourseItemProps {
    item: {
        duration: string;
        title: string;
        Mode: string;
        description: string;
    }
}

 const EducationCourseItem: React.FC<EducationCourseItemProps> = ({item})=> {
    return (
        <div className="flex flex-col justify-start gap-2 bg-tab-list-color p-4 rounded-md w-full">
            <p className="text-sm text-main-color">{item?.duration}</p>
            <h3 className="flex items-center gap-[2px] text-xl text-main-white font-bold">{item?.title}</h3>
            <p className="flex items-center gap-2 text-xl text-main-white"> <i className='bx bxs-circle text-sm text-main-color'></i>{item?.Mode}</p>
            <p className="text-sm text-main-white text-justify">{item?.description}</p>
        </div>      

    );
}

export default EducationCourseItem