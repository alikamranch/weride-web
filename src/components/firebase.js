import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.collection("weride").doc("user").collection("users").doc(`${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};
export default firebase;
