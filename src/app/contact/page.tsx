"use client"
import { useFormik } from "formik";
import {initialContact, contactValidationSchema} from "@/validation/Index"
import { useState } from "react";
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';
export default function Contact() {
    const [loading, setLoading] = useState(false);
    const {values, errors, touched, handleBlur, handleChange, handleSubmit,resetForm} = useFormik({
        initialValues: initialContact,
        validationSchema: toFormikValidationSchema(contactValidationSchema),
        onSubmit: async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/contactUs', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                console.log("🚀 ~ ContactSale ~ response:", response)
                if (!response.ok) {
                    console.error('Error adding email to Google Sheets');

                }
                resetForm();
                setLoading(false);
                toast.success('Message Added successfully!');
            }
            catch (error) {
                console.error("Error during login:", error);
                toast.error('Error adding email to Google Sheets');
                setLoading(false);
            }
        }
    })

    return (
        <div className=" bg-bg-color flex justify-center min-h-screen">
            <div className="flex flex-col items-center gap-4 w-[90%] md:w-3/5 py-16">

                <h2 className="text-3xl text-main-white font-bold">Contact</h2>
                <h2 className="text-2xl text-main-color font-bold pt-16">Let's Work Together!</h2>
                <form onSubmit={handleSubmit} className="sm:w-2/3" >
                    <div className="flex flex-col justify-center gap-4">
                    <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="fullName" placeholder="Full Name" className={`w-full bg-third-bg-color text-main-white px-4 py-2 rounded-md placeholder:text-main-white border focus:outline-none ${errors.fullName && touched.fullName ? "border-red-500" : "border-none"}`}
                     onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    />
                    <input type="text" name="email" placeholder="Email Address" className={`w-full bg-third-bg-color text-main-white px-4 py-2 rounded-md placeholder:text-main-white border focus:outline-none ${errors.email && touched.email ? "border-red-500" : "border-none"}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    />
                    <input type="text" name="phone"  placeholder="Phone Number" className={`w-full bg-third-bg-color text-main-white px-4 py-2 rounded-md placeholder:text-main-white border focus:outline-none ${errors.phone && touched.phone ? "border-red-500" : "border-none"}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}/>
                    <input type="text" name="emailSubject" placeholder="Email Subject" className={`w-full bg-third-bg-color text-main-white px-4 py-2 rounded-md placeholder:text-main-white border focus:outline-none ${errors.emailSubject && touched.emailSubject ? "border-red-500" : "border-none"  }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailSubject}/>
                    </div>
                    <textarea placeholder="Message" name="message" className={`w-full bg-third-bg-color text-main-white px-4 py-2 rounded-md placeholder:text-main-white border focus:outline-none ${errors.message && touched.message ? "border-red-500" : "border-none"}`} rows={5} 
                    onChange={handleChange} onBlur={handleBlur} value={values.message}></textarea>

                    <button type="submit" className="w-[200px] text-xl text-bg-color bg-main-color px-4 py-2 rounded-[25px] transition duration-300 hover:shadow-none mx-auto mt-4">
                        {loading ? <BeatLoader size={10} color="white"/> : 
                         "Send Meassage"}
                          </button>

                    </div>

                </form>

            </div>

            
        </div>
    );
}