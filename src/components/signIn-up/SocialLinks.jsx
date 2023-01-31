import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import {
  authentication,
  db,
  faceBookProvider,
  googleProvider,
} from '../../firebase/firebase.config';

import './Signup-in.css';
import {
  selectUserLoggedIn,
  selectUserName,
} from '../../features/userSlice/userSlice';

const SocialLinks = () => {
  const navigate = useNavigate();
  const userloggedIn = useSelector(selectUserLoggedIn);
  const userName = useSelector(selectUserName);
  console.log(userloggedIn, userName);

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
      navigate('/', { replace: true });
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
      navigate('/', { replace: true });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="ContainerBtn">
      <button className="GoogleBtn" onClick={onGoogleAuth} type="button">
        <ion-icon size="large" name="logo-google" />
      </button>
      <h1 className="or">OR</h1>
      <button className="FacebookBtn" onClick={onFacebookAuth} type="button">
        <ion-icon size="large" className="" name="logo-facebook" />
      </button>
    </div>
  );
};

export default SocialLinks;
