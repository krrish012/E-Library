import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAVZ413Df1yEkoZXs5w-QJX6q6YjqEw0IY",
    authDomain: "elibrary-6cb8f.firebaseapp.com",
    projectId: "elibrary-6cb8f",
    storageBucket: "elibrary-6cb8f.appspot.com",
    messagingSenderId: "668774131906",
    appId: "1:668774131906:web:aaf6ef47f654c01fe5f35b",
    measurementId: "G-WMCR0JJB22"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();