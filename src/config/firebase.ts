// Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCetp1TvKxEbyvjmXeP_v2Gk-U5uWgwGww",
  authDomain: "myinstagram-e724b.firebaseapp.com",
  projectId: "myinstagram-e724b",
  storageBucket: "myinstagram-e724b.appspot.com",
  messagingSenderId: "228649095030",
  appId: "1:228649095030:web:636e781fc32ca0d82db457"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };