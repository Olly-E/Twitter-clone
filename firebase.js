// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-5f5ca.firebaseapp.com",
  projectId: "twitter-5f5ca",
  storageBucket: "twitter-5f5ca.appspot.com",
  messagingSenderId: "364525570091",
  appId: "1:364525570091:web:6469469807e937c2ee826e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()
const db = getFirestore()
const storage =  getStorage();
export {app, db, storage}