import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import "firebase/auth";

 var config = {
    apiKey: "AIzaSyDCNoqciIuiikIAwv3bWwUt-Qul8b57KcM",
    authDomain: "heymagnetic.firebaseapp.com",
    databaseURL: "https://heymagnetic.firebaseio.com",
    projectId: "heymagnetic",
    storageBucket: "heymagnetic.appspot.com",
    messagingSenderId: "191031061751"
  };
  firebase.initializeApp(config);


  export default firebase;