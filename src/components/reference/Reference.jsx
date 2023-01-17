import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

<<<<<<<< HEAD:src/components/Reference/Reference.jsx
import './Reference.css';
========

import '../../index.css';

import './Reference.css';

>>>>>>>> c91c9e5b9e8c0f66102acaa3fab218683e6f7006:src/components/reference/Reference.jsx
import worldMap from '../../assets/world_map_ 1.svg';

function Reference() {
  const { t }= useTranslation();
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
              {t("Home.r1")}
              </h3>
              <p className="text-[#b7b7b7] pt-2">{t("Home.r1-h")}</p>
              <p className="text-[#b7b7b7] text-sm">
              {t("Home.r1-p")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-1/2 reference-div text-center sm:text-left pb-[65px]">
              <h3 className="pt-2">
              {t("Home.r2")}
              </h3>
              <p className="text-[#b7b7b7] pt-2">{t("Home.r2-h")}</p>
              <p className="text-[#b7b7b7] text-sm">
              {t("Home.r2-p")}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-1/2 reference-div text-center sm:text-left pb-[65px]">
              <h3 className="pt-2">
              {t("Home.r3")}
              </h3>
              <p className="text-[#b7b7b7] pt-2">{t("Home.r3-h")}</p>
              <p className="text-[#b7b7b7] text-sm">
              {t("Home.r3-p")}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Reference;
