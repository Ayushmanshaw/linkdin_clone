// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB2Ep4iPQm-yt1EcG4d_epNRQZYPGZi-ZQ",
    authDomain: "linkdin-clone-e669c.firebaseapp.com",
    projectId: "linkdin-clone-e669c",
    storageBucket: "linkdin-clone-e669c.appspot.com",
    messagingSenderId: "571437864779",
    appId: "1:571437864779:web:f3c18921138bc16f82face",
    measurementId: "G-2QKCLT5J8N"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  export default db;