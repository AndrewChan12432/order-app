import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDssTC_hAgShfnpG4boUwf7l1ZJymCotY4",
  authDomain: "order-app-d402f.firebaseapp.com",
  projectId: "order-app-d402f",
  storageBucket: "order-app-d402f.appspot.com",
  messagingSenderId: "845343900809",
  appId: "1:845343900809:web:d7f289d56cce5167fff258"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()