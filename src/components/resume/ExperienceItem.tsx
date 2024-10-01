export default function ExperienceItem({item}:any) {
    return (
        <div className="flex flex-col justify-start gap-[.2rem] bg-tab-list-color p-4 rounded-md w-full">
            <div className="flex justify-between">
            <p className="text-sm text-main-color underline underline-offset-4">{item?.duration} ({item?.location})</p>
            <p className="text-sm text-main-color">{item?.type}</p>
            </div>
            <h3 className="flex items-center gap-[2px] text-xl text-main-white font-bold">{item?.title}</h3>
            <p className="flex items-center gap-2 text-xl text-main-white"> <i className='bx bxs-circle text-sm text-main-color'></i>{item?.company}</p>
            <p className="text-sm text-main-white text-justify">{item?.body}</p>
        </div>

    );
}