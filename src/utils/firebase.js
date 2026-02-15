// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTV2Vnm3VV0Ktz8KV5V1QvYG92OyilNA",
  authDomain: "ecomercecoderuriel.firebaseapp.com",
  projectId: "ecomercecoderuriel",
  storageBucket: "ecomercecoderuriel.firebasestorage.app",
  messagingSenderId: "466917728513",
  appId: "1:466917728513:web:67d6a0d827d60c0d177b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
