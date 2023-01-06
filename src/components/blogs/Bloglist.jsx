import React, { useEffect, useState } from 'react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import './blogs.css';
import {
  fetchListsing,
  getAllListings,
  loadingState,
} from '../../features/listings/listingSlice';
import BlogItem from './BlogItem';
import Spinner from '../spinner/Spinner';

const Bloglist = () => {
  const [filter, setFilter] = useState('Popularity');
  const dispatch = useDispatch();
  const data = useSelector(getAllListings);
  const loading = useSelector(loadingState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchListsing());
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className=" filter flex justify-between px-5 pt2">
        <h2>{filter} </h2>
        <div className="form-filter">
          <select
            className="py-1 px-2"
            onChange={(e) => setFilter(e.currentTarget.value)}
          >
            <option className="py-1 px-2" value="Most Recent">
              Most Recent
            </option>
            <option value="Popularity">Popularity</option>
          </select>
          <input
            type="search"
            className="py-1 px-2"
            placeholder="Search by Title..."
            name=""
            id=""
          />
        </div>
      </div>

      <div className="w-full blogs-swipper">
        <Swiper
          fadeEffect="fade"
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          className="mySwiper cursor-pointer"
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
        >
          {data?.map((singlePost) => (
            <SwiperSlide
              key={singlePost.userRef}
              onClick={() => navigate(`/blogs/${singlePost.userRef}`)}
            >
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
