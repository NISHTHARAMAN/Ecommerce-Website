
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe0fSMCPSaG6APAYRiX1sDqzP8Zw0g5Yg",
  authDomain: "myfirstapp-692dc.firebaseapp.com",
  //databaseURL: "https://console.firebase.google.com/project/myfirstapp-692dc/database/myfirstapp-692dc-default-rtdb/data/~2F",
  projectId: "myfirstapp-692dc",
  storageBucket: "myfirstapp-692dc.appspot.com",
  messagingSenderId: "424614956509",
  appId: "1:424614956509:web:daa09dd87848af1abdfa34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth,app};