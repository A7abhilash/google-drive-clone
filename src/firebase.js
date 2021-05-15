import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();
export const database = {
  folders: (userId) =>
    firestore.collection("gd").doc(userId).collection("folders"),
  files: (userId) => firestore.collection("gd").doc(userId).collection("files"),
  formatDocument: (doc) => ({ id: doc.id, ...doc.data() }),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const auth = app.auth();
export default app;
