import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBLoVgevirNIXqZZ4Qe2kJMRK_63JMmwM",
    authDomain: "ig-reels-dd3da.firebaseapp.com",
    databaseURL: "https://ig-reels-dd3da.firebaseio.com",
    projectId: "ig-reels-dd3da",
    storageBucket: "ig-reels-dd3da.appspot.com",
    messagingSenderId: "358875721415",
    appId: "1:358875721415:web:04f951f2c0ac09c23c58e2",
    measurementId: "G-GJMPE3RT13",
};

firebase.intializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;