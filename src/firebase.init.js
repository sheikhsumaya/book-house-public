// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGW76VWUEaGOSIc7NnXl8RmsB34LiKPfM",
  authDomain: "books-cccc7.firebaseapp.com",
  projectId: "books-cccc7",
  storageBucket: "books-cccc7.appspot.com",
  messagingSenderId: "1041723560166",
  appId: "1:1041723560166:web:fea420be29d999b6032b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;