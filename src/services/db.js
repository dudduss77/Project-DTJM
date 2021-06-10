import firebase from "firebase/app";
import  "firebase/auth";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB3loTvcQlrc7jHtIPSs5-ubkIHtBcWxUI",
    authDomain: "dtjm-9ca15.firebaseapp.com",
    projectId: "dtjm-9ca15",
    storageBucket: "dtjm-9ca15.appspot.com",
    messagingSenderId: "128464562517",
    appId: "1:128464562517:web:d76191d358512946eea7dc"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);


  export default app;