// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC64lE0SSyxFYQSfEirs8q339hzjrz0VDc",
  authDomain: "hmgmt-76d39.firebaseapp.com",
  projectId: "hmgmt-76d39",
  storageBucket: "hmgmt-76d39.appspot.com",
  messagingSenderId: "594222826138",
  appId: "1:594222826138:web:87adad73e0202077d25523"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };