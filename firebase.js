// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYKMJKIvncyQ6ymZumCym8uizuzO-Dnb8",
  authDomain: "instagram-91061.firebaseapp.com",
  projectId: "instagram-91061",
  storageBucket: "instagram-91061.appspot.com",
  messagingSenderId: "346383729072",
  appId: "1:346383729072:web:005ab8f7cd6d7314e01675"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };