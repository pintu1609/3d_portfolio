import EducationData from "@/Data/EducationData";
import EducationItem from "./EducationItem";
import EducationCourseItem from "./EducationCourseItem";

export default function Education() {
    return (
        <div className="flex flex-col  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full" >
            {EducationData?.certificateData?.map((item, index) => (
                <EducationCourseItem item={item}/>
                
            ))}
       


        </div>

        <div className="flex  flex-col justify-center items-center gap-2 mt-8 w-full">
        <h3 className="text-3xl text-main-white font-bold underline underline-offset-8 underline-main-color">Degrees Recevied or Pursuing</h3>
       

        <div className="flex flex-col justify-center gap-2 w-full my-8" >
            {EducationData?.degreeData?.map((item, index) => (
                <EducationItem item={item}/>
                
            ))}
        </div>

        <div>

        </div>

        </div>
        
    </div>
    );
}