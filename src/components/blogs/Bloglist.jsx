import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className="flex flex-wrap justify-center w-full gap-3">
      {data?.map((singlePost) => (
        <BlogItem key={singlePost.userRef} {...singlePost} />
      ))}
    </div>
  );
};

export default Bloglist;
