import React from "react";
import Button from "../UI/Button";
import shareStory from '../../assets/shareStory.svg'

function Share(){
    return (
        <div className='flex flex-col'>
            <div >
            <img src={shareStory} alt="/" className='m-auto pt-6 pb-6'/>
             </div>
            <div className='self-center'>
               <h2 className='text-center text-darkBlue text-2xl font-["Roboto"] pb-6'>Share your story, help others and get help from others</h2> 
               <div className='text-center w-2/4 m-auto'>
               <p className='text-align text-center text-[18px] font-["Roboto"]'>RefuBook changed my life as a refugee by providing the resources and support to secure a job and support my family. Thanks to their help, I was able to give my children better opportunities and watch them thrive. I am grateful for the RefuBook community support and generosity.</p>
               </div>
            </div>
            <div className=' self-center'>
            <Button >Sign up</Button> 
            </div>
        </div>
    );
};

export default Share