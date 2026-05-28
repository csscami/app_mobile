import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export interface Aluno {
  id?: string;
  matricula: string;
  nome: string;
  email: string;
}

const alunosRef = collection(db, "alunos");

// CREATE
export const cadastrarAluno = async (aluno: Aluno) => {
  await addDoc(alunosRef, aluno);
};

// READ
export const listarAlunos = async (): Promise<Aluno[]> => {
  const snapshot = await getDocs(alunosRef);

  return snapshot.docs.map((documento) => ({
    id: documento.id,
    ...(documento.data() as Omit<Aluno, "id">),
  }));
};

// UPDATE
export const atualizarAluno = async (
  id: string,
  aluno: Omit<Aluno, "id">
) => {
  const ref = doc(db, "alunos", id);
  await updateDoc(ref, aluno);
};

// DELETE
export const excluirAluno = async (id: string) => {
  const ref = doc(db, "alunos", id);
  await deleteDoc(ref);
};