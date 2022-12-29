import React, { useEffect } from 'react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import {
  fetchListsing,
  getAllListings,
} from '../../features/listings/listingSlice';
import BlogItem from './BlogItem';

const Bloglist = () => {
  const dispatch = useDispatch();
  const data = useSelector(getAllListings);

  useEffect(() => {
    dispatch(fetchListsing());
  }, []);
  return (
    <div>
      <div className="w-full blogs-swipper">
        <Swiper
          fadeEffect="fade"
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {data?.map((singlePost) => (
            <SwiperSlide key={singlePost.userRef}>
              <div className="flex flex-wrap justify-center w-full ">
                <BlogItem
                  key={singlePost.userRef}
                  {...singlePost}
                  // eslint-disable-next-line react/jsx-boolean-value
                  fullWidth={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-3">
        {data?.map((singlePost, index) => {
          if (index < 4) {
            return (
              <BlogItem
                key={singlePost.userRef}
                {...singlePost}
                // eslint-disable-next-line react/jsx-boolean-value
                fullWidth={false}
              />
            );
            // eslint-disable-next-line no-else-return
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Bloglist;
