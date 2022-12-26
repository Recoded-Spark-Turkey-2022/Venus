import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import {StarIcon} from '@heroicons/react/24/outline'
import AboutImg from '../assets/about-image.svg'
import Button from './UI/Button'


import 'swiper/swiper-bundle.css';
import '../topics.css'





function About() {
  return (
    <div > 
        <div className='aboutfont flex flex-col'>
            <div className=' self-center'>
               <h2 className='text-center text-darkBlue font-bold text-[28px] mt-[43px]'>About</h2> 
               <p className=' text-center text-[14px] max-w-[637px] p-[7px] leading-5'>In quo quaerimus, non emolumento aliquo, sed ipsius honestatis decore laudandis, id est et quas molestias excepturi sint, obcaecati cupiditate non numquam eius modi tempora incidunt, ut earum rerum hic tenetur a natura ipsa natura incorrupte atque integre iudicante itaque aiunt hanc quasi involuta aperiri.</p>
            </div>
            <div className=' self-center'>
            <Button >Learn more</Button> 

            </div>
        </div>
        <div className='flex flex-col-reverse self-center lg:flex-row w-full '>
            <div className='w-1/2 '>
            
                    <Swiper
                      centeredSlides="true"
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                     
                      pagination={{

                        clickable: true,
                        }}
                      
                      modules={[Autoplay, Pagination]}
                     className="mySwiper  lg:w-full"
                    >
                     <SwiperSlide><div>
                        <div className='flex'>
                            <StarIcon className='w-7 mr-4'/>
            
                            <h5 className='font-bold text-[16px] p-[13px]'>Reliability</h5>
                        </div>
                        <p className='text-left max-w-[224px]' >Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div>
                    </SwiperSlide>
                     <SwiperSlide>
                        <div>
                          <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Motivation</h5>
                        </div>
                        <p className='text-left max-w-[224px]'>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                        </div>
                    </SwiperSlide>
                     <SwiperSlide>
                        <div>
                         <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Efficiency</h5>
                         </div> 
                         <p className='text-left max-w-[224px]'>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Creativity</h5>
                        </div>
                        <p className='text-left max-w-[224px]'>Certe, inquam, pertinax non recusandae itaque earum 	rerum facilis est consec. Laudem et impetus quo aut in gravissimo bello animadversionis.</p>
                    </div> 
                    </SwiperSlide>
                    
                    </Swiper>
            </div>
            <div className='flex w-1/2 justify-center' >
                <img className=' ' src={AboutImg} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About