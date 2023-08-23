import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtUd6yKBHPZp5w155LMSMxVvbiy9WKMYY",
  authDomain: "whatsapp-clone-1e62c.firebaseapp.com",
  projectId: "whatsapp-clone-1e62c",
  storageBucket: "whatsapp-clone-1e62c.appspot.com",
  messagingSenderId: "1040825446823",
  appId: "1:1040825446823:web:1d382a6d9358384b21c682",
  measurementId: "G-7GST2VTC7T",
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
