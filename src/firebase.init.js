// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf-oGYuqE_LRmmEUQuMwpNiAOeIDkobfY",
  authDomain: "detactive-books.firebaseapp.com",
  projectId: "detactive-books",
  storageBucket: "detactive-books.appspot.com",
  messagingSenderId: "146975191947",
  appId: "1:146975191947:web:417c4733e898fa13e0358e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
