
import React from 'react';
import img from '../assets/signup-vector.svg'




const Signup = () => {
    return (
        <section className=' w-screen h-screen relative '>
          <div>
            <img
             src={img}
             className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[90vh] "
             alt="circle-logo"/>  
             <div className='bg-white  absolute h-[50%] w-[50%] text-black drop-shadow-2xl rounded-lg min-[320px]:right-[125px] sm:right-[150px] md:right-[200px] lg:right-[250x] xl:right-[350px] 2xl:right-[450px] top-[250px]'>
                <h1 className='text-mediumBlue text-bold text-2xl text-center mt-16'>SIGN UP WITH</h1>
                <div className='flex justify-evenly mt-16 max-[640px]:flex-col max-[640px]:items-center  2xl:flex-row' >
                   <button className='text-white bg-[#E93F2E] hover:bg-[#b72213]/90 focus:ring-4 focus:outline-none focus:ring-[#b72213]/50 rounded-full py-2 text-center flex items-center justify-center dark:focus:ring-[#3b5998]/55 w-[30%] h-[5%] max-[640px]:w-[60%] max-[640px]:mt-1' type='button'>
                     <ion-icon size='large' name="logo-google" />
                   </button>
                   <h1 className='text-mediumBlue text-bold text-2xl max-[640px]:mt-4'>OR</h1>
                   <button className='text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 rounded-full py-2 text-center flex items-center justify-center dark:focus:ring-[#3b5998]/55 w-[30%] h-[5%] max-[640px]:w-[60%] max-[640px]:mt-4' type='button'>
                   <ion-icon size='large' className='' name="logo-facebook" /> 
                   </button>

                  
                 </div>
                 <div className='flex justify-center flex-row max-[640px]:mt-[140px] max-[640px]:flex-col max-[640px]:items-center mt-20 '>
                    <h1 className='text-[#70cdd6] text-bold text-2xl ' >Already a member?</h1>
                    <button className='bg-mediumBlue btn-default transition-colors
                                       hover:bg-white ease-in duration-300 
                                       hover:text-mediumBlue
                                        border
                                        max-[640px]:mt-4
                                       border-mediumBlue
                                       hover:border-mediumBlue
                                               
                                       text-white font-bold px-6 rounded-2xl  py-1 
                                       min-[641px]:text-[#70cdd6]
                                         min-[641px]:bg-white
                                         min-[641px]:border-none
                                         min-[641px]:hover:text-[#3c98a0]
                                         

                                       ' type='button'>
                        Sign in
                    </button>
                 </div>
             </div>

           </div>
        </section>
      )
  };
  
  export default Signup;
  