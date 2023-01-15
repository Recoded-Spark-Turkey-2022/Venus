import React from "react";
import { useTranslation } from 'react-i18next';
import Button from "../UI/Button";
import shareStory from '../../assets/shareStory.svg'

function Share(){
    const {t} = useTranslation()

    return (
        <div className='flex flex-col'>
            <div >
            <img src={shareStory} alt="/" className='m-auto pt-6 pb-6'/>
             </div>
            <div className='self-center'>
               <h2 className='text-center text-darkBlue md:text-4xl leading-[46px] pb-6 font-light text-[20px]'>{t("About.your-story")}</h2> 
               <div className='text-center max-w-[558px] m-auto'>
               <p className=' text-[18px] font-["Roboto"] ml:text-[30px] sm:w-full '>{t("About.your-story-paragraph")}</p>
               </div>
            </div>
            <div className=' self-center'>
            <Button >{t("Button.su")}</Button> 
            </div>
        </div>
    );
};

export default Share