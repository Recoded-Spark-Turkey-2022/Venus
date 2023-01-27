import React from 'react';

import spinner from '../../assets/loadingSpinner.gif';

const Spinner = () => {
  return (
    <div data-testid='spinner' className="fixed left-0 right-0 bottom-0 top-0">
      <img
        className="absolute left-[50%] top-[50%]"
        style={{ transform: 'translate(-50%, -50%)' }}
        src={spinner}
        alt="spinner"
      />
    </div>
  );
};

export default Spinner;
