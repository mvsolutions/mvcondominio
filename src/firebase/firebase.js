import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDta4ApjT-otxUPtYspUdtIDQtnrsvvlBk",
  authDomain: "mvcondominio-86b0b.firebaseapp.com",
  databaseURL: "https://mvcondominio-86b0b.firebaseio.com",
  projectId: "mvcondominio-86b0b",
  storageBucket: "mvcondominio-86b0b.appspot.com",
  messagingSenderId: "895694225417"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
