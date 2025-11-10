// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrbXDTA5FQ_uqRUBosFOXOrlnknzX1No4",
  authDomain: "artify-c4d2a.firebaseapp.com",
  projectId: "artify-c4d2a",
  storageBucket: "artify-c4d2a.firebasestorage.app",
  messagingSenderId: "63969374297",
  appId: "1:63969374297:web:c61c1a74d9e52ddc338148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);