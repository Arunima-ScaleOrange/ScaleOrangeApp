import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBL-hgh19aMoUQJ5Sxwe3amxnuPURjAlxI",
  authDomain: "scaleorange-auth.firebaseapp.com",
  projectId: "scaleorange-auth",
  storageBucket: "scaleorange-auth.appspot.com",
  messagingSenderId: "217113821880",
  appId: "1:217113821880:web:7b99894b923ecea9d3aa4d",
  measurementId: "G-SQ0MT98TDW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };