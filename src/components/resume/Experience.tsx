import work from "@/Data/WorkData";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  
    return (
        <div className="flex mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full" >
                {work.map((item, index) => (
                    <ExperienceItem item={item} key={index}/>
                    
                ))}
           


            </div>
            
        </div>
    );
}