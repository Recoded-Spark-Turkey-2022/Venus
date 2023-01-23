import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchListsing,
  getAllListings,
} from '../../features/listings/listingSlice';
import StoryComponent from '../story/StoryComponent';

import Container from './Container';

export default function StoriesSection() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector(getAllListings);
  console.log(data);
  const selectedBlog1 = data?.filter(
    (singleBlog) => singleBlog.userRef === 'tgK9dBd3xW0F0uUqVxRO'
  );
  const selectedBlog2 = data?.filter(
    (singleBlog) => singleBlog.userRef === '8i67Wv8jV1j25RqntGgh'
  );
  const selectedBlogs = selectedBlog1.concat(selectedBlog2);

  useEffect(() => {
    dispatch(fetchListsing());

    return () => {};
  }, []);

  return (
    <div className="bg-[#4699C2] ">
      <Container>
        <h1 className="text-[#ffffff] font-normal  mb-[19px] pt-[28px] md:pt-[86px] text-[18px]  md:text-[54px] leading-[19px] md:leading-[63px] text-center md:text-left">
          {t('Home.last-stories')}
        </h1>
        <p className="text-[#ffffff] text-[16px] md:text-[18px] leading-[30px] max-w-[402px] text-center md:text-left">
          {t('Home.last-stories-p')}
        </p>
        {selectedBlogs?.map((blog) => {
          return <StoryComponent key={blog.userRef} data={blog} />;
        })}
      </Container>
    </div>
  );
}
