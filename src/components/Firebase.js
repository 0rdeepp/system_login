import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


 const firebaseConfig = {
  apiKey: "AIzaSyA9z0SO8sC3jpIoDGP4GCDsZnUFbmnLaJA",
  authDomain: "sistemadelogin-8d01f.firebaseapp.com",
  projectId: "sistemadelogin-8d01f",
  storageBucket: "sistemadelogin-8d01f.firebasestorage.app",
  messagingSenderId: "792781893578",
  appId: "1:792781893578:web:72c0f461b27494d6f3a933"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
