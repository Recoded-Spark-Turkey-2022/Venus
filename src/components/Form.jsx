import React from "react";
import './form.css'
import man from '../assets/man.png'
import img from '../assets/signup-vector.svg'



const Form = () => {
    return (
        <section className=' w-screen h-screen relative '>
          <img
           src={img}
           className="2xl:mt-16 absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-600px] top-[0px]  w-[100%] h-[90vh] "
           alt="circle-logo"/>
          <div className="BigContainer">
           <div className="Container1">
           <img src={man} alt="p" className="manImg"/>
           
           <button className='cam-btn' type='button'>
            <ion-icon size='large' name="camera-outline" />
                   </button>
                   <h1 className="name">tasnim al hallak</h1>
                   
           </div> 
           <div className="Container2">awe</div>
           <div className="Container4">awe</div>
          </div>
          

         
      </section>

    )
     } 


 export default Form;