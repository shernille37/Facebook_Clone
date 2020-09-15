import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAqO1sFn-nezeWsVshPp1R3ESHSvN94930',
  authDomain: 'facebook-clone-b0f06.firebaseapp.com',
  databaseURL: 'https://facebook-clone-b0f06.firebaseio.com',
  projectId: 'facebook-clone-b0f06',
  storageBucket: 'facebook-clone-b0f06.appspot.com',
  messagingSenderId: '380321490303',
  appId: '1:380321490303:web:59ef8ccb81a6126d06e64a',
  measurementId: 'G-21YSHGGRFZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
