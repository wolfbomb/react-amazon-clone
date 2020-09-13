import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2PevVZ0ycXc0LR_kkC26fDSAefw87Y7o",
    authDomain: "challenge-986ed.firebaseapp.com",
    databaseURL: "https://challenge-986ed.firebaseio.com",
    projectId: "challenge-986ed",
    storageBucket: "challenge-986ed.appspot.com",
    messagingSenderId: "1145176440",
    appId: "1:1145176440:web:473e4dc99d2eee16aec88d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };