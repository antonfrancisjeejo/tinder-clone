import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK9deTyUdcTN-Y0LT-bDALPBHpK09Kitc",
  authDomain: "tinder-clone-19762.firebaseapp.com",
  databaseURL: "https://tinder-clone-19762.firebaseio.com",
  projectId: "tinder-clone-19762",
  storageBucket: "tinder-clone-19762.appspot.com",
  messagingSenderId: "120296633564",
  appId: "1:120296633564:web:27bf0a06d2abd9dddcb019",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
