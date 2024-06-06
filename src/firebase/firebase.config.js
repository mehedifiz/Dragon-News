// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBau3LIsrUUOEvf30053eXTr-U4oygWazU",
  authDomain: "dragon-news-auth-15241.firebaseapp.com",
  projectId: "dragon-news-auth-15241",
  storageBucket: "dragon-news-auth-15241.appspot.com",
  messagingSenderId: "200651799994",
  appId: "1:200651799994:web:71aaf7fc06a72f5009f183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;
