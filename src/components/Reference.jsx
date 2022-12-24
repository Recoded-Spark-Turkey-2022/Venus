import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';

import '../index.css'
import worldMap from '../assets/world_map_ 1.svg'


function Reference (){


    return(
        <div className="flex flex-col md:flex-row justify-around items-center py-12 ">
            <div className="flex justify-center items-center ">
                <img className="w-2/3 md:w-full" src={worldMap} alt="World Map"  />
            </div>
            <div className="flex justify-end w-full md:w-1/2 ">
            <Swiper
          
          grabCursor='true'
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
          loop="true"
          pagination={{
            clickable: true,  dynamicBullets: true 
          }}
          
          modules={[EffectCreative,Pagination]}
          className="mySwiper">
            <SwiperSlide>
                <div className="w-1/2 reference-div text-center sm:text-left">
                    <h3 className="pt-2">Two lines of a short testimonial from someone want to say something, and can
                     say more to explain.</h3>
                    <p className="text-darkGrey pt-2">Louis Li</p>
                    <p className="text-darkGrey text-sm">Trainer at Recoded</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-1/2 reference-div text-center sm:text-left">
                    <h3 className="pt-2">Two lines of a short testimonial from someone want to say something, and can
                     say more to explain.</h3>
                    <p className="text-darkGrey pt-2">Louis Li</p>
                    <p className="text-darkGrey text-sm">Trainer at Recoded</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="w-1/2 reference-div text-center sm:text-left">
                    <h3 className="pt-2">Two lines of a short testimonial from someone want to say something, and can
                     say more to explain.</h3>
                    <p className="text-darkGrey pt-2">Louis Li</p>
                    <p className="text-darkGrey text-sm">Trainer at Recoded</p>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Reference;