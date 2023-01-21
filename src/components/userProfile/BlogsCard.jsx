import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { authentication, db } from '../../firebase/firebase.config';

const BlogsCard = ({ title, text, name }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    onAuthStateChanged(authentication, async (user) => {
      try {
        if (user) {
          const listingRef = collection(db, 'listings');
          const queryRef = query(
            listingRef,
            where('userId', '==', authentication?.currentUser.uid)
          );
          const listing = [];
          const querySnap = await getDocs(queryRef);
          querySnap.forEach((doc) => {
            if (doc.exists()) {
              listing.push(doc.data());
              setImage(listing[0].avatars);
            }
          });
          console.log(listing);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div className="bg-white w-[100%] md:w-[70%] lg:w-[400px] flex h-[300px]  justify-center rounded-3xl overflow-hidden shadow-md py-8 px-3 mb-2">
      <div className="text-xl mb-2 text-left  flex flex-col justify-between">
        <div className="py-2">
          <p className="font-bold blog-text">{title}</p>
        </div>
        <div className="py-2">
          <p className="blog-text">{text}</p>
        </div>
        <div className="flex justify-start">
          <div className="w-[70px]   rounded-full">
            <img
              className="rounded-full  aspect-square"
              src={
                image ||
                'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="Avatar of User"
            />
          </div>
          <p className="text-md text-mediumBlue pt-10 pl-5">{name}</p>
        </div>
      </div>
    </div>
  );
};
export default BlogsCard;
