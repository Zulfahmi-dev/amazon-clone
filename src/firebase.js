import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDEqTglCw2wpFhMqPrPr1yf7gagEfVt9dU',
  authDomain: 'clone-96952.firebaseapp.com',
  databaseURL: 'https://clone-96952.firebaseio.com',
  projectId: 'clone-96952',
  storageBucket: 'clone-96952.appspot.com',
  messagingSenderId: '264250310247',
  appId: '1:264250310247:web:809ea0869defdcc8199ec2',
  measurementId: 'G-NMXN0P4CLS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
