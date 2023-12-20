import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrJNgwlqLtrMQ86vbEEFVt8FFzRJXFogk",
  authDomain: "saboreandoreceitas-4b3ac.firebaseapp.com",
  projectId: "saboreandoreceitas-4b3ac",
  storageBucket: "saboreandoreceitas-4b3ac.appspot.com",
  messagingSenderId: "666133884649",
  appId: "1:666133884649:web:40a145bcef282786690a78",
  measurementId: "G-HH76L5ND62"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
