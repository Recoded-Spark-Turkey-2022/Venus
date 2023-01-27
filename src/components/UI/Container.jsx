import React from 'react';

const Container = ({ children }) => {
  return <div data-testid='container' className="container mx-auto px-10">{children}</div>;
};

export default Container;
