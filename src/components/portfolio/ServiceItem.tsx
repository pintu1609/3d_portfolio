import React from "react";

interface ServiceItemProps {
    item: {
        icon: React.ReactNode;  // Adjust type as needed (e.g., string, JSX.Element)
        title: string;
        desc: string;
    };
}
const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
    return (
        <div className="flex flex-col justify-start gap-2 bg-tab-list-color py-[1.5rem] px-4 rounded-md w-full group">
            <div className="flex justify-between items-center">
                <p className="text-5xl group-hover:text-main-color ">{item?.icon}</p>
                <div className="flex items-center justify-center  bg-main-white rounded-full  text-2xl h-[2rem] w-[2rem] group-hover:bg-main-color rotate-[225deg] hover:rotate-180 transition duration-300 ">

                    <i className='bx bx-arrow-back bx-rotate-225' ></i>
                </div>
            </div>
            <h3 className="flex items-center gap-[2px] text-xl text-main-white font-bold group-hover:text-main-color">{item?.title}</h3>
            <p className="text-[16px] text-main-white text-justify font-bold">{item?.desc}</p>
        </div>

    );
}

export default ServiceItem;