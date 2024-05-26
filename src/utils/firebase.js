import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd6cPDjYgaQMoj4hlkdZ30tm-EYyUZmWo",
  authDomain: "socialcloset-84563.firebaseapp.com",
  projectId: "socialcloset-84563",
  storageBucket: "socialcloset-84563.appspot.com",
  messagingSenderId: "227339592708",
  appId: "1:227339592708:web:fc36ad93331b5dc4340151",
};

export const initFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(initFirebase);
