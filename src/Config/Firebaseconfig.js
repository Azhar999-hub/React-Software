// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGzhSOfh8yVTwf5HgLzt01eT8S5wWZu0M",
  authDomain: "react-boilerplate-bcac9.firebaseapp.com",
  projectId: "react-boilerplate-bcac9",
  storageBucket: "react-boilerplate-bcac9.appspot.com",
  messagingSenderId: "539603842448",
  appId: "1:539603842448:web:b5cc1394c9df067c00ef15",
  measurementId: "G-1NJ09MJRFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;