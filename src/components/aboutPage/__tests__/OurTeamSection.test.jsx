import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from "react-test-renderer";
import OurTeamSection from '../OurTeamSection';

jest.mock('swiper/react', () => ({
    Swiper: 'Swiper',
    SwiperSlide: 'SwiperSlide'
  }));
  
  jest.mock('swiper', () => ({
    Pagination: 'Pagination'
  }));

  jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str) => str
      };
    },
  }));
  
it(`renders correctly` , () => {
    const tree = renderer.create(
    <Router>
    <OurTeamSection />
    </Router>);
    expect(tree).toMatchSnapshot();
});