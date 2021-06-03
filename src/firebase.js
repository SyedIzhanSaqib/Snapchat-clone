import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAoORI6xvdpaqkn2pjME2NjxVl0VCXtn5c',
  authDomain: 'snapchat-izhan.firebaseapp.com',
  projectId: 'snapchat-izhan',
  storageBucket: 'snapchat-izhan.appspot.com',
  messagingSenderId: '602373922458',
  appId: '1:602373922458:web:53063f06fdffca741a8923',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
