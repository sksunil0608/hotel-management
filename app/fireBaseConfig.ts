// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXvTjYag9SZQaHmpQEjVANFFeBVPNcPg8",
  authDomain: "hotel-management-2496b.firebaseapp.com",
  projectId: "hotel-management-2496b",
  storageBucket: "hotel-management-2496b.appspot.com",
  messagingSenderId: "912757257701",
  appId: "1:912757257701:web:c416c1929fba7469ca2b0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };