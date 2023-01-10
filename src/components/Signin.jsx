import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/signup-vector.svg'
import './Signup-in.css'





const Signin = () => {
    return (
        <section className=' w-screen h-screen relative '>
          <div>
            <img
             src={img}
             className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[90vh] "
             alt="circle-logo"/>  
             <div className='ContainerBox'>
                <h1 className='Title'>SIGN IN WITH</h1>
                <div className='ContainerBtn' >
                   <button className='GoogleBtn' type='button'>
                     <ion-icon size='large' name="logo-google" />
                   </button>
                   <h1 className='or'>OR</h1>
                   <button className='FacebookBtn' type='button'>
                   <ion-icon size='large' className='' name="logo-facebook" /> 
                   </button>

                  
                 </div>
                 <div className='Container3 '>
                    <h1 className='Already ' >Want to be a member?</h1>
                    <Link to='/signup'>
                    <button className='LastBtm' type='button'>
                        Sign up
                    </button>
                    </Link>
                 </div>
             </div>

           </div>
        </section>
      )
  };
  
  export default Signin;