import React from 'react';
import renderer from 'react-test-renderer';
import Reference from '../Reference';

jest.mock('swiper/react', () => ({
  Swiper: 'Swiper',
  SwiperSlide: 'SwiperSlide',
}));

jest.mock('swiper', () => ({
  Pagination: 'Pagination',
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}));

it(`renders correctly`, () => {
  const tree = renderer.create(<Reference />);
  expect(tree).toMatchSnapshot();
});
