import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className="bg-mediumBlue btn-default transition-colors
     hover:bg-white ease-in duration-300 
     hover:text-mediumBlue
     border
     border-mediumBlue
     hover:border-mediumBlue  
     my-9        
     text-[#ffffff] font-bold px-6 rounded-2xl  py-1"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;