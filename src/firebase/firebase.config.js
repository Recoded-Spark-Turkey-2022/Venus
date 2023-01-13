// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VENUS_APIKEY,
  authDomain: process.env.VENUS_AUTHDOMAIN,
  projectId: 'capstoneprojectrefubook',
  storageBucket: process.env.VENUS_STORAGE_BUCKET,
  messagingSenderId: process.env.VENUS_MESSAGING_SENDER_ID,
  appId: process.env.VENUS_APPID,
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
