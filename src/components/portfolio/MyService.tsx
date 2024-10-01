import ServiceData from "@/Data/Services";
import ServiceItem from "./ServiceItem";

export default function Myservices() {
    return (
        <div className="flex flex-col  mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full" >
            {ServiceData?.map((item, index) => (
                <ServiceItem item={item}/>
                
            ))}
       


        </div>
        </div>
    );
}