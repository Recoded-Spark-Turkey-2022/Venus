import { useForm } from "react-hook-form";


const SignUpForm= ()=> {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=> {
        console.log(data);
    }

    return(
       
         <form className="flex flex-col gap-4 items-center justify-center py-5 px-4" onSubmit={handleSubmit(onSubmit)}>
           <input
           type='text' 
           placeholder="Name"
           {...register("name", { required: true, maxLength: 20,  pattern: /^[A-Za-z]+$/i  })} className="border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 rounded"/>
           <input 
           placeholder="Your Email"
           {...register("email", { required: true })} 
           className="border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 rounded"/>
           <input type="password"
           placeholder="Password" 
           {...register("password", { required: true, minLength: 6 })} 
           className="border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 rounded"/>
           <button type="submit" id="mediumBlue-button" className="px-8 whitespace-nowrap rounded-2xl py-1">
            Sign Up</button>

        </form>

    )
}
export default SignUpForm;