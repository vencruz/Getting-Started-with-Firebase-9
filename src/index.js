import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByZzKFmNZJMC2JbaEb0TfYv5AZrAmI-4k",
  authDomain: "fir-practice-25d0b.firebaseapp.com",
  projectId: "fir-practice-25d0b",
  storageBucket: "fir-practice-25d0b.appspot.com",
  messagingSenderId: "945685232567",
  appId: "1:945685232567:web:61b24989b2c9b07861c632",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "books");

getDocs(colRef)
  .then((snapshot) => {
    let books = [];

    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });

    console.log(books);
  })
  .catch((err) => {
    console.log({ err });
  });
