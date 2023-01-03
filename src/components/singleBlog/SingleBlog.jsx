import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { getAllListings } from '../../features/listings/listingSlice';
import BlogItem from '../blogs/BlogItem';
import './singleBlog.css';

const SingleBlog = ({ data }) => {
  const dataStore = useSelector(getAllListings);
  console.log(dataStore);
  const { avatars, title, userName, text, content, ImageUrl } = data[0];

  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse main-container">
      <article className="flex flex-col ">
        <h1 className="text-3xl uppercase font-medium text-center">{title} </h1>
        <img
          className="aspect-[2/1] object-cover rounded-xl"
          src={ImageUrl}
          alt={title}
        />
        <p className="flex  align-middle self-center justify-center items-end mb-5">
          <span>by</span>{' '}
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={avatars[0]}
            alt="avatar"
          />{' '}
          <span> {userName} </span>
        </p>
        <div>
          <h2 className="text-xl font-medium">{text} </h2>
          <p>{content} </p>
        </div>
      </article>
      <aside className="w-[100%] h-fit ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          // eslint-disable-next-line react/jsx-boolean-value
          effect="fade"
          fadeEffect={{ crossFade: true }}
          // eslint-disable-next-line react/jsx-curly-brace-presence
          direction="horizontal"
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            reverseDirection: true,
          }}
        >
          {dataStore?.map((singlePost) => (
            <SwiperSlide
              key={singlePost.userRef}
              className="w-full h-full"
              onClick={() => navigate(`/blogs/${singlePost.userRef}`)}
            >
              <div className="flex flex-wrap justify-center w-full blog-wrapper">
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
      </aside>
    </div>
  );
};

export default SingleBlog;
