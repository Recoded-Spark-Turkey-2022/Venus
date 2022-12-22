import React from 'react';
import logo from '../../assets/homePage-graphic.svg';
import Button from '../UI/Button';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className=" w-full flex flex-col-reverse md:flex-row  justify-center md:justify-between lg:justify-around ">
        <div className="text-center md:text-left">
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
        <div>
          <img
            className="mx-auto w-[500px] md:w-full md:mx-0"
            src={logo}
            alt="hero-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
