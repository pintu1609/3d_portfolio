export default function EducationItem({item}:any) {
    return (
        <div className="flex gap-4 bg-tab-list-color p-4 rounded-md">
            <div className="w-1/5  overflow-hidden flex items-center justify-center  ">
                <img src={item?.image} alt="" className="w-[12rem] h-[12rem] object-cover rounded-full" />
            </div>

        <div className="flex flex-col justify-start gap-2  w-full">
            <div className="flex flex-col gap-4 bg-main-color px-2 rounded-tr-md mt-[-1rem] mr-[-1rem]">
                     <div className="flex justify-between w-full">
                        <h2 className="text-3xl text-main-white font-bold">{item?.title}</h2>
                        <p className="text-lg text-main-white">{item?.duration}</p>
                    </div>
                <h2 className="text-2xl font-bold">{item?.cource}</h2>
            </div>

            <div className="flex flex-col justify-start gap-2">
                {item?.desc?.map((desc:string) => (
                    <p className="flex items-center gap-2 text-xl text-main-white text-justify"><i className='bx bxs-bolt text-2xl text-main-color' ></i>{desc}</p>
                ))
            }

            </div>

            <button className="text-2xl text-bg-color bg-main-color px-4 py-2 rounded-[25px] shadow-[0_0_1rem_0_#0ef] transition duration-300 hover:shadow-none mx-auto mr-0" onClick={() => window.open(item?.link)}>View Website</button>

        </div>  
        </div>

    );
}