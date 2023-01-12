import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { StarIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import AboutImg from '../../assets/about-image.svg'
import Button from '../UI/Button'

import 'swiper/swiper-bundle.css';
import "./about.css";






function About() {
  return (
    <div > 
        <div className='aboutfont flex flex-col'>
            <div className=' self-center'>
               <h2 className='text-center text-darkBlue font-bold text-[28px] mt-[43px]'>About</h2> 
               <p className=' text-center text-[17px] max-w-[800px] p-[7px] leading-5'>RefuBook is a platform dedicated to supporting refugees as they navigate their new lives and communities. We offer a range of resources, connections, and support to empower individuals to thrive in their new surroundings. Join us in creating a welcoming and inclusive environment for all refugees.</p>
            </div>
            <div className=' self-center'>
            <Link to="/about"><Button > Learn more</Button > </Link>
            </div>
        </div>
        <div className='flex flex-col-reverse self-center lg:flex-row w-full flex justify-center'>
            <div className='lg:block self-center hidden '>
                <div className='flex '>
                        <div className='p-5'>
                          <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Self-sufficiency</h5>
                          </div>
                            <p className='text-left max-w-[224px]'>Providing refugees with the tools and resources they need to become independent and self-reliant in their new surroundings.</p>
                        </div>
                        <div className='p-5'>
                        <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Advocacy</h5>
                         </div> 
                         <p className='text-left max-w-[224px]'>Speaking out for the rights and needs of refugees and raising awareness about their situation.</p>
                        </div>
                </div>
                <div className='flex'>
                  <div className='p-5'>
                        <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Diversity</h5>
                        </div>
                        <p className='text-left max-w-[224px]'>Promoting and valuing diversity among refugees, creating an environment of acceptance and belonging for all.</p>
                  </div>
                  <div className='p-5'>
                        <div className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Sustainability</h5>
                        </div>
                        <p className='text-left max-w-[224px]' >Developing long-term solutions that support the ongoing integration and self-sufficiency of refugees.</p>
                  </div>
                </div>
            </div>

            <div className='about-swiper block lg:hidden  bg-inlightBlue w-full lg:w-1/2 '>
            
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
                     className="about-swiper mySwiper lg:w-full"
                    >
                     <SwiperSlide>
                      <div>
                        <div className='flex'>
                            <StarIcon className='w-7 mr-4'/>
            
                            <h5 className='font-bold text-[16px] p-[13px]'>Self-sufficiency</h5>
                        </div>
                        <p className='text-left max-w-[224px]' >Providing refugees with the tools and resources they need to become independent and self-reliant in their new surroundings.</p>
                    </div>
                    </SwiperSlide>
                     <SwiperSlide>
                        <div>
                          <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Advocacy</h5>
                        </div>
                        <p className='text-left max-w-[224px]'>Speaking out for the rights and needs of refugees and raising awareness about their situation.</p>
                        </div>
                    </SwiperSlide>
                     <SwiperSlide>
                        <div>
                         <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Diversity</h5>
                         </div> 
                         <p className='text-left max-w-[224px]'>Promoting and valuing diversity among refugees, creating an environment of acceptance and belonging for all.</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                        <div  className='flex'>
                            <StarIcon className='w-7 mr-4'/>
                            <h5 className='font-bold text-[16px] p-[13px]'>Sustainability</h5>
                        </div>
                        <p className='text-left max-w-[224px]'>Developing long-term solutions that support the ongoing integration and self-sufficiency of refugees.</p>
                    </div> 
                    </SwiperSlide>
                    
                    </Swiper>
            </div>
            <div className=' flex justify-center  w-full lg:w-1/2' >
                <img className=' w-[500px] lg:w-full ' src={AboutImg} alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About