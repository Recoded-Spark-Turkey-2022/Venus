import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';


import '../index.css';

import '../Reference.css';

import worldMap from '../assets/world_map_ 1.svg';

function Reference() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row justify-around items-center py-12 "
    >
      <div className="flex justify-center items-center ">
        <img className="w-2/3 md:w-full" src={worldMap} alt="World Map " />
      </div>
      <div className="flex justify-end w-full md:w-1/2 ">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper pt-[100px]"
        >
          <SwiperSlide>
            <div className="w-1/2 reference-div text-center sm:text-left pb-[65px]">
              <h3 className="pt-2">
              RefuBook has been invaluable for me as a Syrian refugee, helping me navigate my new surroundings and build a better future.
              </h3>
              <p className="text-[#b7b7b7] pt-2">Ghaith</p>
              <p className="text-[#b7b7b7] text-sm">Syria, member at Refubook</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-1/2 reference-div text-center sm:text-left pb-[65px]">
              <h3 className="pt-2">
              As a Eritrean refugee, RefuBook has been an essential resource for finding information and resources for my new home.
              </h3>
              <p className="text-[#b7b7b7] pt-2">Dellina</p>
              <p className="text-[#b7b7b7] text-sm">Eritrea, member at Refubook</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-1/2 reference-div text-center sm:text-left pb-[65px]">
              <h3 className="pt-2">
              The community on RefuBook has been a lifesaver for me as a Venezuelan refugee, connecting me with others and providing support.
              </h3>
              <p className="text-[#b7b7b7] pt-2">Jose</p>
              <p className="text-[#b7b7b7] text-sm">Venezuela, member at Refubook</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Reference;
