// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5FGrY9qf7-CtLnCeOccTz-ilG7msnlzY",
  authDomain: "music-town-bd2023.firebaseapp.com",
  projectId: "music-town-bd2023",
  storageBucket: "music-town-bd2023.appspot.com",
  messagingSenderId: "131986511236",
  appId: "1:131986511236:web:5830ea768cba71891b79d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;