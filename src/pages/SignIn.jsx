import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import {
  authentication,
  db,
  faceBookProvider,
  googleProvider,
} from '../firebase/firebase.config';
import {
  selectUserLoggedIn,
  selectUserName,
  setUserLoggedIn,
  setUserLoggedOut,
} from '../features/userSlice/userSlice';

// import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
// import { db } from '../firebase/firebase.config';

const SignIn = () => {
  const dispatch = useDispatch();
  const userloggedIn = useSelector(selectUserLoggedIn);
  const userName = useSelector(selectUserName);

  const navigate = useNavigate();

  const onGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(authentication, googleProvider);
      const { user } = result;
      // if (user.uid) {

      // }

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      } else {
        console.log('you already signed in');
      }
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await authentication.signOut();

      dispatch(
        setUserLoggedIn({
          userloggedIn: false,
        })
      );

      dispatch(setUserLoggedOut());
    } catch (error) {
      console.log(error);
    }
  };

  const onFacebookAuth = async () => {
    try {
      const result = await signInWithPopup(authentication, faceBookProvider);
      const { user } = result;
      /* Checking if we have a reference to that user */
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      } else {
        console.log('you already signed in');
      }
      navigate(-1);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20 mx-auto w-20">
      <button
        type="button"
        id="mediumBlue-button"
        onClick={onGoogleAuth}
        className="mr-4"
      >
        {' '}
        Google{' '}
      </button>
      <button type="button" onClick={onFacebookAuth} id="mediumBlue-button">
        {' '}
        Facebook{' '}
      </button>
      {userloggedIn && (
        <button type="button" onClick={handleSignOut}>
          Sign Out{' '}
        </button>
      )}
      {userName && <p>{userName}</p>}
    </div>
  );
};

export default SignIn;
