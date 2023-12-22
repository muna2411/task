// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUzlsOzyllmj4-dPODV9r_nJcY4ud9Me8",
  authDomain: "name-of-your-project-6e4ab.firebaseapp.com",
  projectId: "name-of-your-project-6e4ab",
  storageBucket: "name-of-your-project-6e4ab.appspot.com",
  messagingSenderId: "627141636498",
  appId: "1:627141636498:web:35516b3ca864d6382a114b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;