// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUKVKboqIOSN9g7PdNa5xcLkpUwRPmEfg',
  authDomain: 'fir-auth-c0e85.firebaseapp.com',
  projectId: 'fir-auth-c0e85',
  storageBucket: 'fir-auth-c0e85.appspot.com',
  messagingSenderId: '251281382397',
  appId: '1:251281382397:web:7d6518c684b02a8a54d794',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
