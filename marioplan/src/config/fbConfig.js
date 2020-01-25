import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyByA7sAr3PCzwYwOHMqNaMVahGw6D9c4qg",
  authDomain: "react-marioplan-c33ac.firebaseapp.com",
  databaseURL: "https://react-marioplan-c33ac.firebaseio.com",
  projectId: "react-marioplan-c33ac",
  storageBucket: "react-marioplan-c33ac.appspot.com",
  messagingSenderId: "610884142383",
  appId: "1:610884142383:web:bf3e898c79ffae09884dda",
  measurementId: "G-Y8Y40983PH"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots : true})

export default firebaseConfig;