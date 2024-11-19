// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYTOvByfIYN3mjd_TiOyfxKGJPCdWdw1c",
  authDomain: "desafio-firebase-bff4b.firebaseapp.com",
  projectId: "desafio-firebase-bff4b",
  storageBucket: "desafio-firebase-bff4b.firebasestorage.app",
  messagingSenderId: "549012315632",
  appId: "1:549012315632:web:6e4be2964bb88d24631135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;