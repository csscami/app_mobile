import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

const alunosRef = collection(db, "alunos");

// CREATE
export const cadastrarAluno = async (aluno) => {
  await addDoc(alunosRef, aluno);
};

// READ
export const listarAlunos = async () => {
  const snapshot = await getDocs(alunosRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// UPDATE
export const atualizarAluno = async (id, aluno) => {
  const ref = doc(db, "alunos", id);
  await updateDoc(ref, aluno);
};

// DELETE
export const excluirAluno = async (id) => {
  const ref = doc(db, "alunos", id);
  await deleteDoc(ref);
};