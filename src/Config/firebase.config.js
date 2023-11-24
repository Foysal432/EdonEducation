// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_G-SXivh3En4BD0Mlp8kWEuL_KNcIdCw",
  authDomain: "assingment-12-client-cab4f.firebaseapp.com",
  projectId: "assingment-12-client-cab4f",
  storageBucket: "assingment-12-client-cab4f.appspot.com",
  messagingSenderId: "609880546649",
  appId: "1:609880546649:web:a01c7ce085e78697070048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);