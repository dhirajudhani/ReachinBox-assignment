// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWah-Qp672ZrQcORLNYMW6vPkCzd3w23c",
  authDomain: "login1-d733e.firebaseapp.com",
  projectId: "login1-d733e",
  storageBucket: "login1-d733e.appspot.com",
  messagingSenderId: "408855804470",
  appId: "1:408855804470:web:57bfe759813648b94d7697",
  measurementId: "G-3XSTZ19Q43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export default app