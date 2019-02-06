import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBuSmePUmepqRoukDp8aRV-79vUxc6kAbY',
  authDomain: 'trainingplanner-ccf2b.firebaseapp.com',
  databaseURL: 'https://trainingplanner-ccf2b.firebaseio.com',
  projectId: 'trainingplanner-ccf2b',
  storageBucket: 'trainingplanner-ccf2b.appspot.com',
  messagingSenderId: '368593978100'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
