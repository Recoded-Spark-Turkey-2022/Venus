import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import {
  authentication,
  db,
  faceBookProvider,
  googleProvider,
} from '../firebase/firebase.config';
import {
  selectUserName,
  setUserLoggedIn,
  setUserLoggedOut,
} from '../features/userSlice/userSlice';

// import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
// import { db } from '../firebase/firebase.config';

const SignIn = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  //  const userEmail = useSelector(selectUserEmail);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const onGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(authentication, googleProvider);
      const { user } = result;
      if (user.uid) {
        setLoggedIn(true);
      }

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
      setLoggedIn(false);

      dispatch(
        setUserLoggedIn({
          isLoggedIn: false,
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
        alert('you already signed in');
      }

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, (user) => {
      if (user) {
        setLoggedIn(true);

        dispatch(
          setUserLoggedIn({
            userName: user.displayName,
            userEmail: user.email,
            isLoggedIn: true,
          })
        );
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };

        localStorage.setItem('token', JSON.stringify(user.uid));
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
      return () => {
        unsub();
      };
    });
  }, []);
  // const onGoogleAuth = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();

  //     const result = await signInWithPopup(auth, provider);
  //     const { user } = result;
  //     console.log(user);
  //     /* Checking if we have a reference to that user */
  //     const docRef = doc(db, 'users', user.uid);
  //     const docSnap = await getDoc(docRef);
  //     if (!docSnap.exists()) {
  //       await setDoc(docRef, {
  //         name: user.displayName,
  //         email: user.email,
  //         timeStamp: serverTimestamp(),
  //       });
  //     } else {
  //       alert('you already signed in');
  //     }
  //   } catch (error) {
  //     console.error(error.message, '22');
  //   }
  // };

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
      {isLoggedIn && (
        <button type="button" onClick={handleSignOut}>
          Sign Out{' '}
        </button>
      )}
      {userName && <p>{userName}</p>}
    </div>
  );
};

export default SignIn;
