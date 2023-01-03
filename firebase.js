import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAtlErS_bZe27XGbSCMlHcz4MeVa0CpFeM',
  authDomain: 'docs-8363d.firebaseapp.com',
  projectId: 'docs-8363d',
  storageBucket: 'docs-8363d.appspot.com',
  messagingSenderId: '719624581033',
  appId: '1:719624581033:web:575f34eed5cb5cc3961eb8',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
