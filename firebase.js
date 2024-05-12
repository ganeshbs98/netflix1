// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxiZ_kqDX90IB2cU49cnqaHLsom5ELz88",
  authDomain: "netflix-pro-ed0a7.firebaseapp.com",
  projectId: "netflix-pro-ed0a7",
  storageBucket: "netflix-pro-ed0a7.appspot.com",
  messagingSenderId: "546486549124",
  appId: "1:546486549124:web:526244d1f023a5632fe0d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth;