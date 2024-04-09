// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUMadMP8Ge6Lj_bsj5vrM3BWqNFy82Sro",
  authDomain: "auth-connection-5f607.firebaseapp.com",
  projectId: "auth-connection-5f607",
  storageBucket: "auth-connection-5f607.appspot.com",
  messagingSenderId: "859400998896",
  appId: "1:859400998896:web:48c2155d50ee5f41a61735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;