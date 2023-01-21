import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useEffect } from 'react';

import editicon from '../../assets/editicon.svg';

import { authentication, db } from '../../firebase/firebase.config';

const Avatar = ({ isOpen, name, setName, image, setImage }) => {
  useEffect(() => {
    onAuthStateChanged(authentication, async (user) => {
      try {
        if (user) {
          // Getting user information from   authenticated user

          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          const userInfo = [];
          userInfo.push(docSnap.data());

          const listingRef = collection(db, 'listings');
          const queryRef = query(
            listingRef,
            where('userId', '==', authentication?.currentUser.uid)
          );
          const listing = [];
          const querySnap = await getDocs(queryRef);
          querySnap.forEach((document) => {
            if (document.exists()) {
              listing.push(document.data());

              setImage(listing[0]?.avatars);
              // eslint-disable-next-line no-unused-expressions
              name || setName(userInfo[0]?.name || user.displayName);
            }
          });
          if (listing.length === 0) {
            setImage(userInfo[0]?.avatars[0]);

            // eslint-disable-next-line no-unused-expressions
            name || setName(userInfo[0]?.name || user.displayName);
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  return (
    <div className="flex flex-col relative justify-center mt-10 m-3 w-48 h-48 ">
      <img
        className="manImg  bg-openRose"
        src={
          image ||
          'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
        }
        alt="Avatar"
      />
      <button
        type="button"
        className="flex items-center absolute bottom-0 right-0"
        onClick={isOpen}
      >
        <img
          className="bg-mediumBlue rounded-full w-12 h-12"
          src={editicon}
          alt="edit-icon"
        />
      </button>
      <p className="text-center py-2">{name}</p>
    </div>
  );
};

export default Avatar;
