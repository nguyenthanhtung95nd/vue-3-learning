import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDg_OTvpIGqXuh8Moa-7Oc5IT6fECUW5mQ',
  authDomain: 'music-b0f16.firebaseapp.com',
  projectId: 'music-b0f16',
  storageBucket: 'music-b0f16.appspot.com',
  //   messagingSenderId: '716484962853',
  appId: '1:716484962853:web:3a152a2fb1c41d34a22dcc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
