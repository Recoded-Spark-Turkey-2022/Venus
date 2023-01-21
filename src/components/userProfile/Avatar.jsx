import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import editicon from '../../assets/editicon.svg';
import { authentication, db } from '../../firebase/firebase.config';

const Avatar = ({ isOpen }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
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
            return listing.push(doc.data());
          });
          setImage(listing[0]?.avatars);
          setName(listing[0]?.userName || user.displayName);
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
