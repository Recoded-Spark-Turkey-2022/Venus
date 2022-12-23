import { motion } from 'framer-motion';
import React from 'react';
import logo from '../../assets/homePage-graphic.svg';
import circleLogo from '../../assets/signup-vector.svg';
import Button from '../UI/Button';

const HeroSection = () => {
  return (
    <section className="   h-[90vh] relative">
      <img
        src={circleLogo}
        className="absolute image-hero z-0 left-[-500px] top-[0px]  w-[100%] h-[90vh]"
        alt="circle-logo"
      />
      <div className=" w-full h-full items-center  flex  flex-col-reverse md:flex-row  justify-center md:justify-between lg:justify-around ">
        <motion.div
          initial={{ x: '-1000px', scale: 0.5 }}
          animate={{ x: '0px', scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left "
        >
          <div className="z-10 relative">
            <h1 className="text-5xl lg:text-7xl font-bold text-mediumBlue my-5">
              RefuBook
            </h1>
            <h2 className="text-3xl lg:text-5xl text-openRose font-bold mb-4">
              Express Freely
            </h2>
            <p className="text  w-full  md:max-w-[25rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laboriosam iure dolores illo soluta cum aliquid minima quos culpa
              officia?
            </p>
            <Button>Sign-up</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: '1000px', scale: 0.5 }}
          animate={{ x: '0px', scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="mx-auto w-[900px] md:mx-0"
            src={logo}
            alt="hero-logo"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
