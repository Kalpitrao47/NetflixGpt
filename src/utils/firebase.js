// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhs3DCOq6vx98i63d1-EVQEDFXtWpqcRs",
  authDomain: "netflixgpt-7f5b3.firebaseapp.com",
  projectId: "netflixgpt-7f5b3",
  storageBucket: "netflixgpt-7f5b3.appspot.com",
  messagingSenderId: "827376012767",
  appId: "1:827376012767:web:46b6fc65286fff2b11486a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();