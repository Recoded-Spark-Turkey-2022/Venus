import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className=" flex   container mx-auto flex-col md:flex-row items-center justify-center bg-white py-10 px-5">
      <div className="flex justify-center items-center  mt-5 mb-5 md:mt-1 md:mb-1 mx-auto flex-shrink-0">
        <a
          href="#navbar"
          className="brightness-[70%] hover:brightness-[110%] duration-500"
        >
          <img src={Logo} alt="Refubook-logo" />
        </a>
      </div>
      <div className="w-full mb-2 md:mb-1 lg:ml-3 flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex gap-8 items-center font-medium justify-center">
          <li className="">
            <Link className="text-darkGrey hover:text-darkBlue" to="/">
              Home
            </Link>
          </li>
          <li className="">
            <Link className="text-darkGrey hover:text-darkBlue" to="/about">
              About
            </Link>
          </li>
          <li className="">
            <Link className="text-darkGrey hover:text-darkBlue" to="/contact">
              Contact
            </Link>
          </li>
          <li className="">
            <Link className="text-darkGrey hover:text-darkBlue" to="/blogs">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mt-5 sm:mt-1 flex lg:justify-center">
        <div className="flex justify-between flex-row">
          <div className="flex justify-between items-center mr-3">
            <Link to='/signup'>
            <button
              className="text-[#FFFFFF] rounded-full bg-mediumBlue px-8 btn-default transition-colors
     hover:bg-white ease-in duration-300 border border-mediumBlue  whitespace-nowrap
     hover:border-mediumBlue hover:text-mediumBlue"
              type="button"
            >
              Sign up
            </button>
            </Link>
          </div>
          <div className="">
            <select className="rounded-full border border-solid outline-none text-darkGrey font-medium border-mediumBlue px-8">
              <option className="border-mediumBlue " value="en">
                English
              </option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
