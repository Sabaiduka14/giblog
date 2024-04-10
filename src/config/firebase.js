import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6Eyu92kmbmDLMASjtzuA2PckDwQKJ7Pw",
  authDomain: "blog-app-4ec4c.firebaseapp.com",
  projectId: "blog-app-4ec4c",
  storageBucket: "blog-app-4ec4c.appspot.com",
  messagingSenderId: "1061398955376",
  appId: "1:1061398955376:web:83165876e8a050affe3bb5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
}
