import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';

const Navbar = () => {
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'BLog', link: '/blogs' },
    { name: 'Contact', link: '/contact' },
  ];
  const [open, setOpen] = useState(true);
  return (
    <nav className="shadow-md w-full fixed z-1000 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-cyan-600"
        >
          <span className="text-3xl text-cyan-600 mr-1 pt-2">
            <img src={logo} alt="logo" />
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}> </ion-icon>
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-30 ' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-cyan-600 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <Link to='/signin'>
          <button
            id='mediumBlue-button' className="ml-0 md:ml-9 px-6 rounded-2xl py-1"type="button"
          >
            Sign in
          </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
