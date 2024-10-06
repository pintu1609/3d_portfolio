import skill from "@/Data/Skill";
import Image from "next/image";

export default function Skill() {
    return (
        <div className="flex flex-col  mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 w-full" >
            {skill?.map((item, index) => (
                <div className="flex flex-col gap-3 bg-tab-list-color px-4 py-2 rounded-md justify-center items-center" key={index}>
                    {item?.logos && <Image src={item?.logos} alt="" 
                     className="transition duration-300 ease-in-out filter hover:filter-none" 
                     style={{ filter: "invert(100%) sepia(8%) saturate(0%) hue-rotate(46deg) brightness(105%) contrast(110%)" }} 
                     onMouseLeave={(e) => {
                       e.currentTarget.style.filter = "invert(100%) sepia(8%) saturate(0%) hue-rotate(46deg) brightness(105%) contrast(110%)";
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.filter = "invert(87%) sepia(27%) saturate(6948%) hue-rotate(134deg) brightness(99%) contrast(109%)";
                     }}
                     />
            }
                    {item?.logo &&
                    <p className=" flex items-center justify-center text-[6rem] text-main-white hover:text-main-color p-0 m-0 h-[90px]">{item?.logo}</p>
}
                    <h2 className="text-xl text-main-white">{item?.title}</h2>



                </div>
                
            ))}
        </div>
        </div>

    );
}