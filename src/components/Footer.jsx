import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'

const Footer = ()=>{

    return(
        <footer className='flex flex-wrap flex-col md:flex-row items-center justify-center bg-white p-2'>
          <div className='flex justify-center items-center  mt-5 mb-5 md:mt-1 md:mb-1 mx-auto flex-shrink-0'>
            <img src={Logo} alt="" />
          </div>
          <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto'>
            <ul className="flex justify-center">
              <li className='mr-6'><Link className='text-[#8b8f9c] hover:text-[#4699c2]' to='/'>Home</Link></li>
              <li className='mr-6'><Link className='text-[#8b8f9c] hover:text-[#4699c2]' to='/about'>About</Link></li>
              <li className='mr-6'><Link className='text-[#8b8f9c] hover:text-[#4699c2]' to='/contact'>Contact</Link></li>
              <li className='mr-6'><Link className='text-[#8b8f9c] hover:text-[#4699c2]' to='/blogs'>Blogs</Link></li>
            </ul>
          </div>
          <div className='mx-auto mt-10 sm:mt-1 px-16 sm:px-8 flex lg:justify-center'>
            <div className='flex justify-between flex-row'>
            <div className='flex justify-between items-center mr-3'>
              <button className='text-white rounded-full bg-mediumBlue px-8 ' type='button' >Sign up</button>
            </div>
            <div className=''>
              <select className='rounded-full border-[#4699c2] px-8'> 
                <option className='border-[#4699c2]' value='en'>English</option>
                <option value='ar'>Arabic</option>
              </select>
            </div>
            </div>

          </div>

        </footer>
    )
}
export default Footer;