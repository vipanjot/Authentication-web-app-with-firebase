import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUzjT7FMXo0mtJ1ckAsE-auLn-0NJfe30",
  authDomain: "quotes-bf578.firebaseapp.com",
  databaseURL: "https://quotes-bf578-default-rtdb.firebaseio.com",
  projectId: "quotes-bf578",
  storageBucket: "quotes-bf578.appspot.com",
  messagingSenderId: "240944909356",
  appId: "1:240944909356:web:264ef4c73c38cd85a7d589",
  measurementId: "G-MH7GFM65SY",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
