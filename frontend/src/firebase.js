import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_79eRp8hngRR2I2VOVFtWyxgz0n4s_nw",
  authDomain: "news24marathi-7c5d0.firebaseapp.com",
  projectId: "news24marathi-7c5d0",
  storageBucket: "news24marathi-7c5d0.appspot.com",
  messagingSenderId: "194111353896",
  appId: "1:194111353896:web:422dd57ad0e8a14bdef11d",
  measurementId: "G-TWM115RKR3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
