
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBRq0ieQUXHmvweOmQXFtvksXjINXbTB8",
    authDomain: "wearhouse-e465d.firebaseapp.com",
    projectId: "wearhouse-e465d",
    storageBucket: "wearhouse-e465d.appspot.com",
    messagingSenderId: "575858254953",
    appId: "1:575858254953:web:fb9e31ec293a3ea1722ef8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;