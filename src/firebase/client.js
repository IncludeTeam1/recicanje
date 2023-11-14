// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ref, getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwY_k4Hh9W_nkstVc93hmRG1MpBeMOf8g",
  authDomain: "recicanje-74f46.firebaseapp.com",
  projectId: "recicanje-74f46",
  storageBucket: "recicanje-74f46.appspot.com",
  messagingSenderId: "551063104081",
  appId: "1:551063104081:web:48c90137600ed876352670",
  measurementId: "G-4FYG5VB6W6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export const multimediaStorageRef = ref(storage, "multimedia");
