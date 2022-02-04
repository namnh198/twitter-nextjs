import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-c_gj-FdbzABSwwnRNBLD6SYU3EWtzck",
  authDomain: "twitter-nextjs-clone-7753b.firebaseapp.com",
  projectId: "twitter-nextjs-clone-7753b",
  storageBucket: "twitter-nextjs-clone-7753b.appspot.com",
  messagingSenderId: "842990608930",
  appId: "1:842990608930:web:e40dd2ce35950d7894607b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
