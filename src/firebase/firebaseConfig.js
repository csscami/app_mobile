import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyC22k4DhUQ1ek3snDlDV3BbLJQNtI0Gp0",
  authDomain: "cadastro-alunos-189ae.firebaseapp.com",
  projectId: "cadastro-alunos-189ae",
  storageBucket: "cadastro-alunos-189ae.appspot.com",
  messagingSenderId: "1029937960426",
  appId: "1:1029937960426:web:b55d9ccc450144fd5b4e93"
};

// INICIALIZA O FIREBASE
const app = initializeApp(firebaseConfig);

// BANCO DE DADOS (FIRESTORE)
export const db = getFirestore(app);