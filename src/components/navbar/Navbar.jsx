import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import {
  selectUserLoggedIn,
  setUserLoggedIn,
  setUserLoggedOut,
} from '../../features/userSlice/userSlice';
import { authentication } from '../../firebase/firebase.config';

const Navbar = () => {
  const { t }= useTranslation();
  const isLoggedIn = useSelector(selectUserLoggedIn);
  const dispatch = useDispatch();
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Contact', link: '/contact' },
  ];

  const [open, setOpen] = useState(true);
  const handleSignOut = async () => {
    try {
      await authentication.signOut();

      dispatch(
        setUserLoggedIn({
          isLoggedIn: false,
        })
      );

      dispatch(setUserLoggedOut());
      localStorage.setItem('token', '');
    } catch (error) {
      console.log(error);
    }
  };

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
                className="text-cyan-600 hover:text-cyan-600 duration-500 hover:underline
                "
          
              >
                {link.name}
              </Link>
            </li>
          ))}
<Link to='/signin '>
          <button
            id="mediumBlue-button"
            className="ml-0 md:ml-9 px-6 rounded-2xl py-1"
            type="button"
          >
            {t('Button.si')}
          </button>
           </Link>
          {isLoggedIn && (
            <button
              id="mediumBlue-button"
              className="ml-0 md:ml-9 px-6 rounded-2xl py-1"
              type="button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
