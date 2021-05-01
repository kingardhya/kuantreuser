//import firebase from 'firebase'
import * as firebase from 'firebase'

//firebase.initializeApp({
//    apiKey: "AIzaSyB28pDvjK4Udyt2kVBPc3RysLPhkGCLeo0",
//    authDomain: "e-antri.firebaseapp.com",
//    databaseURL: "https://e-antri.firebaseio.com",
//    projectId: "e-antri",
//    storageBucket: "e-antri.appspot.com",
//    messagingSenderId: "577633356237",
//    appId: "1:577633356237:web:281fd8f3ce18b716bd9c84",
//    measurementId: "G-FLGTB5NJ08"
//})

const firebaseConfig = {
        apiKey: "AIzaSyB28pDvjK4Udyt2kVBPc3RysLPhkGCLeo0",
        authDomain: "e-antri.firebaseapp.com",
        databaseURL: "https://e-antri.firebaseio.com",
        projectId: "e-antri",
        storageBucket: "e-antri.appspot.com",
        messagingSenderId: "577633356237",
        appId: "1:577633356237:web:281fd8f3ce18b716bd9c84",
        measurementId: "G-FLGTB5NJ08"
    }

firebase.initializeApp(firebaseConfig)    
//const FIREBASE = firebase;


//export default FIREBASE;
export default firebase;