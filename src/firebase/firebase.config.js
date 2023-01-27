// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_VENUS_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_VENUS_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_VENUS_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_VENUS_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_VENUS_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_VENUS_API_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const googleProvider = new GoogleAuthProvider();
export const faceBookProvider = new FacebookAuthProvider();

export const authentication = getAuth();
export const storage = getStorage(app);
