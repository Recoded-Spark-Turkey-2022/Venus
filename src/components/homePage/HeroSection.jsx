import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import logo from '../../assets/homePage-graphic.svg';
import circleLogo from '../../assets/signup-vector.svg';
import Button from '../UI/Button';


const HeroSection = () => {
  const { t }= useTranslation();
  return (
    <section className=" mt-[70px]  w-full  min-h-[90vh] relative overflow-hidden md:overflow-visible mb-10">
      <img
        src={circleLogo}
        className="absolute image-hero z-0 left-[-500px] md:left-[-200px] lg:left-[-300px] xl:left-[-400px] 2xl:left-[-500px] top-[0px]  w-[100%] h-[90vh]"
        alt="circle-logo"
      />
      <div className=" items-center flex flex-col-reverse md:flex-row   md:w-full justify-between md:justify-between lg:justify-between ">
        <motion.div
          initial={{ x: '-1000px', scale: 0.5 }}
          animate={{ x: '0px', scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left "
        >
          <div data-testid='banner' className="z-10 mt-20 md:mt-20  md:mr-10 lg:mr-0">
            <h1 className="text-5xl lg:text-7xl font-bold text-mediumBlue my-5">
              RefuBook
            </h1>
            <h2 className="text-3xl lg:text-5xl text-openRose font-bold mb-4">
              Express Freely
            </h2>
            <p className="text  w-full  md:max-w-[25rem]">
            {t("Home.hero")}
            </p>
            <Link to="/signup"><Button >{t("Button.su")}</Button></Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: '1000px', scale: 0.5 }}
          animate={{ x: '0px', scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            data-testid='hero-img' className="mx-auto mt-5 md:mt-0  w-full xl:w-[700px] md:mx-0  md:aspect-square"
            src={logo}
            alt="hero-logo"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
