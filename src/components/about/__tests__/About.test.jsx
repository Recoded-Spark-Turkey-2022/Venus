import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from "react-test-renderer";
import About from '../About';

jest.mock('swiper/react', () => ({
    Swiper: 'Swiper',
    SwiperSlide: 'SwiperSlide'
  }));
  
  jest.mock('swiper', () => ({
    Pagination: 'Pagination'
  }));

it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
    <About />
    </Router>);
    expect(tree).toMatchSnapshot();
});