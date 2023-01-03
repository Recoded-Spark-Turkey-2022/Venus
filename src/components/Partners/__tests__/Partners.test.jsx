import React from 'react';
import renderer from "react-test-renderer";
import Partners from "../Partners";

jest.mock('swiper/react', () => ({
    Swiper: 'Swiper',
    SwiperSlide: 'SwiperSlide'
  }));
  
  jest.mock('swiper', () => ({
    Pagination: 'Pagination'
  }));
  

  it(`renders correctly` , () => {
    const tree = renderer.create(<Partners />);
    expect(tree).toMatchSnapshot();
});