import React from "react";
import { useForm } from "react-hook-form";



const SignInForm= ()=> {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=> {
        console.log(data);
    }

    return(
       
         <form className="flex flex-col gap-4 items-center justify-center py-1 md:py-3  " onSubmit={handleSubmit(onSubmit)}>
           
           <input 
           placeholder="Your Email"
           {...register("email", { required: true })} 
           className="border border-gray-300 px-0 md:px-3 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded w-32 md:w-64"/>
           <input type="password"
           placeholder="Password" 
           {...register("password", { required: true, minLength: 6 })} 
           className="border border-gray-300 px-0 md:px-3 py-1 md:py-2 text-gray-900 placeholder-gray-500 rounded w-32 md:w-64"/>
           <button type="submit" id="mediumBlue-button" className="px-8 whitespace-nowrap rounded-2xl py-0 md:py-1 w-16 md:w-32 flex justify-center items-center">
            Sign In</button>

        </form>

    )
}
export default SignInForm;