import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyBJPS8PrAKjt88sMCjk7PVG7HOXNidiYZg",
  authDomain: "login-form03.firebaseapp.com",
  databaseURL: "https://login-form03-default-rtdb.firebaseio.com",
  projectId: "login-form03",
  storageBucket: "login-form03.appspot.com",
  messagingSenderId: "793931456411",
  appId: "1:793931456411:web:92703710d4b8e7c9864b3e",
  measurementId: "G-8RXGE25X7Q"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();