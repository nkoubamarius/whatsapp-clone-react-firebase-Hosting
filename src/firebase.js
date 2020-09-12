import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBEGArcwdXICjQfkdUNaMM5MFmTaibgkcM",
    authDomain: "ai-restoview-p.firebaseapp.com",
    databaseURL: "https://ai-restoview-p.firebaseio.com",
    projectId: "ai-restoview-p",
    storageBucket: "ai-restoview-p.appspot.com",
    messagingSenderId: "416697017432",
    appId: "1:416697017432:web:6814d24ce679c9ee51d62d"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();

  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;