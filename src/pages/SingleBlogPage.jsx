import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { collection, query, where, getDocs } from 'firebase/firestore';

import { useParams } from 'react-router-dom';
import SingleBlog from '../components/singleBlog/SingleBlog';

import { fetchListsing, loadingState } from '../features/listings/listingSlice';
import { db } from '../firebase/firebase.config';
import Spinner from '../components/spinner/Spinner';

const SingleBlogPage = () => {
  const [listing, setListing] = useState([]);
  const dispatch = useDispatch();

  const params = useParams();

  const loading = useSelector(loadingState);

  useEffect(() => {
    dispatch(fetchListsing());
    const fetchListingData = async () => {
      try {
        const listingRef = collection(db, 'listings');

        const queryOflist = query(
          listingRef,
          where('userRef', '==', params.blogId)
        );

        const querySnap = await getDocs(queryOflist);
   const listingObj=[];
        querySnap.forEach((document) => {
         return listingObj.push(document.data())
          
        });

        if (querySnap) {
          setListing(listingObj);
        } else {
          console.log('Could not fetch the data');
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchListingData();
  }, [params.blogId]);


  if (loading && listing.length === 0) {
    return <Spinner />;
  }

  return listing.length>0 && <SingleBlog data={listing} />;
};

export default SingleBlogPage;
