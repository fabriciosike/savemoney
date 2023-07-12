import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyAuDGLtNnpH_iP5qyUFLMpPMVShCAaN1zQ",
  authDomain: "savemoney-14b80.firebaseapp.com",
  databaseURL: "https://savemoney-14b80-default-rtdb.firebaseio.com",
  projectId: "savemoney-14b80",
  storageBucket: "savemoney-14b80.appspot.com",
  messagingSenderId: "681663301879",
  appId: "1:681663301879:web:63e19c61c5376b2ed2ebf2",
  measurementId: "G-BVXQ7EMN05"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

