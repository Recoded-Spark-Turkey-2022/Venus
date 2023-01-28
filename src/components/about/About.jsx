import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { StarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutImg from '../../assets/about-image.svg';
import Button from '../UI/Button';
import 'swiper/swiper-bundle.css';
import './about.css';

function About() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, staggerChildren: 0.5 }}
    >
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1, type: 'tween' }}
        className="aboutfont flex flex-col"
      >
        <div className=" self-center">
          <h2 className="text-center text-darkBlue font-bold text-[28px] mt-[43px]">
            {t('Home.about')}
          </h2>
          <p className=" text-center text-[17px] max-w-[800px] p-[7px] leading-5">
            {t('Home.about-p')}
          </p>
        </div>
        <div className=" self-center">
          <Link to="/about">
            <Button> {t('Button.learn')}</Button>{' '}
          </Link>
        </div>
      </motion.div>
      <div className="flex flex-col-reverse self-center lg:flex-row w-full flex justify-center">
        <div className="lg:block self-center hidden ">
          <div className="flex ">
            <div className="p-5">
              <div className="flex">
                <StarIcon className="w-7 mr-4" />
                <h5 className="font-bold text-[16px] p-[13px]">
                  {t('Home.p1')}
                </h5>
              </div>
              <p className="text-left max-w-[224px]">{t('Home.p1-p')}</p>
            </div>
            <div className="p-5">
              <div className="flex">
                <StarIcon className="w-7 mr-4" />
                <h5 className="font-bold text-[16px] p-[13px]">
                  {t('Home.p2')}
                </h5>
              </div>
              <p className="text-left max-w-[224px]">{t('Home.p2-p')}</p>
            </div>
          </div>
          <div className="flex">
            <div className="p-5">
              <div className="flex">
                <StarIcon className="w-7 mr-4" />
                <h5 className="font-bold text-[16px] p-[13px]">
                  {t('Home.p3')}
                </h5>
              </div>
              <p className="text-left max-w-[224px]">{t('Home.p3-p')}</p>
            </div>
            <div className="p-5">
              <div className="flex">
                <StarIcon className="w-7 mr-4" />
                <h5 className="font-bold text-[16px] p-[13px]">
                  {t('Home.p4')}
                </h5>
              </div>
              <p className="text-left max-w-[224px]">{t('Home.p4-p')}</p>
            </div>
          </div>
        </div>

        <div className="about-swiper block lg:hidden  bg-inlightBlue w-full lg:w-1/2 ">
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
                <div className="flex">
                  <StarIcon className="w-7 mr-4" />

                  <h5 className="font-bold text-[16px] p-[13px]">
                    {t('Home.p1')}
                  </h5>
                </div>
                <p className="text-left max-w-[224px]">{t('Home.p1-p')}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex">
                  <StarIcon className="w-7 mr-4" />
                  <h5 className="font-bold text-[16px] p-[13px]">
                    {t('Home.p2')}
                  </h5>
                </div>
                <p className="text-left max-w-[224px]">{t('Home.p2-p')}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex">
                  <StarIcon className="w-7 mr-4" />
                  <h5 className="font-bold text-[16px] p-[13px]">
                    {t('Home.p3')}
                  </h5>
                </div>
                <p className="text-left max-w-[224px]">{t('Home.p3-p')}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="flex">
                  <StarIcon className="w-7 mr-4" />
                  <h5 className="font-bold text-[16px] p-[13px]">
                    {t('Home.p4')}
                  </h5>
                </div>
                <p className="text-left max-w-[224px]">{t('Home.p4-p')}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" flex justify-center  w-full lg:w-1/2">
          <img className=" w-[500px] lg:w-full " src={AboutImg} alt="/" />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
