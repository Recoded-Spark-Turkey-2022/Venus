import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { collection, query, where, getDocs } from 'firebase/firestore';

import { useParams } from 'react-router-dom';
import SingleBlog from '../components/singleBlog/SingleBlog';

import { fetchListsing } from '../features/listings/listingSlice';
import { db } from '../firebase/firebase.config';

const SingleBlogPage = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  // const data = useSelector(getAllListings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchListsing());
  }, []);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const listingRef = collection(db, 'listings');
        const queryOflist = query(
          listingRef,
          where('userRef', '==', params.blogId)
        );

        // eslint-disable-next-line spaced-comment
        //get Query Snap

        const querySnap = await getDocs(queryOflist);
        const listingArr = [];
        querySnap.forEach((document) => {
          listingArr.push(document.data());
          setListing(listingArr);
        });

        if (querySnap) {
          setListing(listingArr);
          setLoading(false);
        } else {
          console.log('Could not fetch the data');
        }

        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchListingData();
  }, [params.blogId]);
  console.log(loading, listing);
  return (
    <div>
      <SingleBlog />
    </div>
  );
};

export default SingleBlogPage;
