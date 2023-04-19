import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAqPNN5szLGaoWFQr7PQgHCztAS5HZhSt4",
  authDomain: "abe-s-application.firebaseapp.com",
  databaseURL: "https://abe-s-application-default-rtdb.firebaseio.com",
  projectId: "abe-s-application",
  storageBucket: "abe-s-application.appspot.com",
  messagingSenderId: "963180385993",
  appId: "1:963180385993:web:2c05a41170b0eed5279f18"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase (app);


