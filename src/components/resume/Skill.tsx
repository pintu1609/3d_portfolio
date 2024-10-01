import skill from "@/Data/Skill";

export default function Skill() {
    return (
        <div className="flex flex-col  mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 w-full" >
            {skill?.map((item) => (
                <div className="flex flex-col gap-3 bg-tab-list-color px-4 py-2 rounded-md justify-center items-center">
                    <p className=" flex items-center justify-center text-[6rem] text-main-white hover:text-main-color p-0 m-0 h-[90px]">{item?.logo}</p>
                    <h2 className="text-xl text-main-white">{item?.title}</h2>



                </div>
                
            ))}
        </div>
        </div>

    );
}