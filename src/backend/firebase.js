import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDYgYS6PyAmGGTxj3WFpsTYlLuK7_7W7iE",
authDomain: "huertoint.firebaseapp.com",
projectId: "huertoint",
storageBucket: "huertoint.appspot.com",
messagingSenderId: "819049979924",
appId: "1:819049979924:web:3fddbb8a09d659a8f20701"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Crear una constante para cada servicio de firebase que vamos a utilizar
const database = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default {
    database,
    auth,
    storage,
};