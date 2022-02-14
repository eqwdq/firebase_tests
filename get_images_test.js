
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODOs: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI5SdwdXMQeu3y7AQPZnkcZH_GmIcSgKw",
  authDomain: "login-9a8b6.firebaseapp.com",
  databaseURL: "https://login-9a8b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "login-9a8b6",
  storageBucket: "login-9a8b6.appspot.com",
  messagingSenderId: "663312681266",
  appId: "1:663312681266:web:aaff10c5e0a58994ceaf2b",
  measurementId: "G-XTC30ZEDBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);



import { getStorage, ref, listAll } from "firebase/storage";

const storage = getStorage();

async function getImageFromFirestore(){
    var name = imgname.value;

    var ref = doc(clouddb, "ImageLinks/" + name);
    const docSnap = await getDoc(ref);

    if(docSnap.exists()){
        myimg.src = docSnap.data().ImageURL;
    }
}

window.onload(getImageFromFirestore);