import React from 'react'

interface EducationItemProps {
    item: {
        image: string;
        title: string;
        subtitle: string;
        duration: string;
        cource: string;
        subcourse: string;
        desc: string[];
        link: string; // Added the link property
    }
}
const EducationItem: React.FC<EducationItemProps> = ({item})=> {
    return (
        <div className="flex md:flex-row flex-col items-center w-full gap-4 bg-tab-list-color p-4 rounded-md">
            <div className="w-full sm:w-2/5 lg:w-1/5  overflow-hidden flex items-center justify-center  ">
                <img src={item?.image} alt="" className="w-[12rem] h-[12rem] md:w-[10rem] md:h-[10rem] object-cover rounded-full" />
            </div>

        <div className="flex flex-col justify-start gap-2  w-full">
            <div className="flex flex-col gap-4 bg-main-color px-2 md:rounded-tr-md md:mt-[-1rem] md:mr-[-1rem] mx-[-1rem]">
                     <div className="flex justify-between items-center w-full">
                        <h2 className="text-xl custom:text-2xl sm:text-3xl md:text-4xl sm:text-3xl text-main-white font-bold hidden sm:block">{item?.title}</h2>
                        <h2 className="text-xl custom:text-2xl sm:text-3xl md:text-4xl sm:text-3xl text-main-white font-bold block sm:hidden">{item?.subtitle}</h2>

                        <p className="text-sm sm:text-lg text-main-white">{item?.duration}</p>
                    </div>
                <h2 className=" text-xl sm:text-2xl font-bold hidden sm:block">{item?.cource}</h2>
                <h2 className=" text-xl sm:text-2xl font-bold block sm:hidden">{item?.subcourse}</h2>

            </div>

            <div className="flex flex-col justify-start gap-2">
                {item?.desc?.map((desc, index ) => (
                    <p className="flex items-center gap-2 text-sm sm:text-xl text-main-white text-justify" key={index}><i className='bx bxs-bolt text-2xl text-main-color' ></i>{desc}</p>
                ))
            }

            </div>

            <button className="text-2xl text-bg-color bg-main-color px-4 py-2 rounded-[25px] shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-none mx-auto mr-0" onClick={() => window.open(item?.link)}>View Website</button>

        </div>  
        </div>

    );
}

export default EducationItem