import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      id='mediumBlue-button' className="my-9 px-6 rounded-2xl  py-1" type="button">
      {children}
    </button>
  );
};

export default Button;
