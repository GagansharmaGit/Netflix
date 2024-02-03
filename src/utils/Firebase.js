// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "netflix-c70fc.firebaseapp.com",
  projectId: "netflix-c70fc",
  storageBucket: "netflix-c70fc.appspot.com",
  messagingSenderId: "296578317972",
  appId: "1:296578317972:web:3f9985caf85f992eebbe81",
  measurementId: "G-PY4WDP44F0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();
