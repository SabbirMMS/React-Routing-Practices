// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp_KZbQXVqfvsxl6WRLy3CgzGmN893-IQ",
  authDomain: "assdi-lecture-react.firebaseapp.com",
  projectId: "assdi-lecture-react",
  storageBucket: "assdi-lecture-react.firebasestorage.app",
  messagingSenderId: "438679805374",
  appId: "1:438679805374:web:354e3aad0b21074a60edef",
  measurementId: "G-F3V4WRFJNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);