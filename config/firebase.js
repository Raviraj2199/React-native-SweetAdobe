import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCe0kqjg84UjP13lHeN-_H7B8YKbF3sStk",
  authDomain: "airbnb-c6b53.firebaseapp.com",
  projectId: "airbnb-c6b53",
  storageBucket: "airbnb-c6b53.appspot.com",
  messagingSenderId: "875293798134",
  appId: "1:875293798134:web:e7479d49338501f27a86d7"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
