import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAEQuoZxvaSowC2DgxRGE5smW75uyLZ5fw",
  authDomain: "sichool-project.firebaseapp.com",
  projectId: "sichool-project",
  storageBucket: "sichool-project.appspot.com",
  messagingSenderId: "812706655716",
  appId: "1:812706655716:web:b9f4b925eba45a0ebbabf1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
