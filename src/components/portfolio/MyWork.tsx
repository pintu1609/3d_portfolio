import projectdata from "@/Data/ProjectData";
import WorkItem from "./WorkItem";


export default function MyWork() {
    return (
        <div className="flex flex-col  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" >
            {projectdata?.map((item, index) => (
                <WorkItem item={item} key={index}/>
                
            ))}
       


        </div>
        </div>
    );
}