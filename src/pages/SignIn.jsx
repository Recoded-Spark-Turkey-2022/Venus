import React from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';

const SignIn = () => {
  const auth = getAuth();
  const onGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      console.log(user);
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
        alert('you already signed in');
      }
    } catch (error) {
      console.error(error.message, '22');
    }
  };
  const onFacebookAuth = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
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
        alert('you already signed in');
      }

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
    </div>
  );
};

export default SignIn;
