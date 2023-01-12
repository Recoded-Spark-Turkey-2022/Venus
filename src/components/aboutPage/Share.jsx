import React from "react";
import Button from "../UI/Button";

function Share(){
    return (
        <div className='flex flex-col'>
            <div className='self-center'>
               <h2 className='text-center text-darkBlue text-[34px] font-["Roboto"]'>Share your story, help others and get help from others</h2> 
               <p className='text-align text-center text-[18px] w-auto font-["Roboto"]'>But Brooke Chaffin and Catherine Connors are looking to change that with the introduction of Maverick, a social network that connects young girls with female mentors to express their creativity in a safe space.</p>
            </div>
            <div className=' self-center'>
                <Link to='/signup'>
            <Button >Sign up</Button> 
            </Link>
            </div>
        </div>
    );
};

export default Share