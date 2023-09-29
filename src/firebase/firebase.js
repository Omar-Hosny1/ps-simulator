// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOxk6tGQdeab3m4_BceWdbokvNL26S4I",
  authDomain: "ps-simulator-7aa3c.firebaseapp.com",
  projectId: "ps-simulator-7aa3c",
  storageBucket: "ps-simulator-7aa3c.appspot.com",
  messagingSenderId: "756142748783",
  appId: "1:756142748783:web:32333c40f58b8d7578c99a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app