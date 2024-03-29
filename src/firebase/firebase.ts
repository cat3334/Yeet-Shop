import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const apiKey: string = process.env.REACT_APP_API_KEY as string;

const firebaseConfig = {
  apiKey,
  authDomain: "yeetshop-e444b.firebaseapp.com",
  projectId: "yeetshop-e444b",
  storageBucket: "yeetshop-e444b.appspot.com",
  messagingSenderId: "1041009178330",
  appId: "1:1041009178330:web:a0d22d022b33dc628917e3",
  measurementId: "G-8WP03B5V1X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
