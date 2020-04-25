import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCxm1cOD_SiyEa2y2ru7Th797tTlVs4HSk",
    authDomain: "weride-web.firebaseapp.com",
    databaseURL: "https://weride-web.firebaseio.com",
    projectId: "weride-web",
    storageBucket: "weride-web.appspot.com",
    messagingSenderId: "318667492087",
    appId: "1:318667492087:web:07b4bcd15649520a3fa1f2",
    measurementId: "G-NWZB9BCNDH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
