import { useForm } from "react-hook-form";


const SignIn= ()=> {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=> {
        console.log(data);
    }

    return(
       
         <form className="flex flex-col gap-4 mt-20  items-center justify-center py-12 px-4  " onSubmit={handleSubmit(onSubmit)}>
           
           <input 
           placeholder="Your Email"
           {...register("email", { required: true })} 
           className="border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 rounded"/>
           <input type="password"
           placeholder="Password" 
           {...register("password", { required: true, minLength: 6 })} 
           className="border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 rounded"/>
           <button type="submit" id="mediumBlue-button" className="px-8 whitespace-nowrap rounded-2xl py-1">
            Sign In</button>

        </form>

    )
}
export default SignIn;