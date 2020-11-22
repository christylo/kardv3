import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcxLGMTSRW_FiyO5wbyVkQmS5FonfexfI",
    authDomain: "kard-950b8.firebaseapp.com",
    databaseURL: "https://kard-950b8.firebaseio.com",
    projectId: "kard-950b8",
    storageBucket: "kard-950b8.appspot.com",
    messagingSenderId: "25053652875",
    appId: "1:25053652875:web:786fa9b7445897479df18e",
    measurementId: "G-R25BGVN5Z0"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;