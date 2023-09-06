import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj1ovBREz29xZThVKaaIz1gE8hA08WD9k",
  authDomain: "blog-64b97.firebaseapp.com",
  projectId: "blog-64b97",
  storageBucket: "blog-64b97.appspot.com",
  messagingSenderId: "217833676115",
  appId: "1:217833676115:web:b61ecacf054a9f145d95a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
