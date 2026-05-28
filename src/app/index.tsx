import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

import {
  atualizarAluno,
  cadastrarAluno,
  excluirAluno,
  listarAlunos
} from "../services/alunoService";

interface Aluno {
  id: string;
  matricula: string;
  nome: string;
  email: string;
}

export default function Index() {
  const [matricula, setMatricula] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  const [editando, setEditando] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState<string | null>(null);

  // 🔄 Carregar alunos ao abrir a tela
  useEffect(() => {
    carregarAlunos();
  }, []);

  async function carregarAlunos() {
    try {
      const data = await listarAlunos();
      setAlunos(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao carregar alunos");
    }
  }

  // ➕ Criar ou atualizar aluno
  async function salvarAluno() {
    if (!matricula || !nome || !email) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    const aluno = {
      matricula,
      nome,
      email
    };

    try {
      if (editando && idSelecionado) {
        await atualizarAluno(idSelecionado, aluno);
        Alert.alert("Aluno atualizado");
      } else {
        await cadastrarAluno(aluno);
        Alert.alert("Aluno cadastrado");
      }

      limparCampos();
      carregarAlunos();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao salvar aluno");
    }
  }

  // ✏️ Editar aluno
  function editarAluno(item: Aluno) {
    setMatricula(item.matricula);
    setNome(item.nome);
    setEmail(item.email);

    setIdSelecionado(item.id);
    setEditando(true);
  }

  // 🗑️ Excluir aluno
  async function removerAluno(id: string) {
    try {
      await excluirAluno(id);
      Alert.alert("Aluno removido");
      carregarAlunos();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro ao excluir aluno");
    }
  }

  // 🧹 Limpar campos
  function limparCampos() {
    setMatricula("");
    setNome("");
    setEmail("");
    setIdSelecionado(null);
    setEditando(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Alunos</Text>

      {/* FORMULÁRIO */}
      <TextInput
        placeholder="Matrícula"
        value={matricula}
        onChangeText={setMatricula}
        style={styles.input}
      />

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <Button
        title={editando ? "Atualizar aluno" : "Cadastrar aluno"}
        onPress={salvarAluno}
      />

      <View style={{ marginVertical: 10 }} />

      {/* LISTA */}
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Aluno }) => (
          <View style={styles.card}>
            <Text>Matrícula: {item.matricula}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Email: {item.email}</Text>

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => editarAluno(item)}
              >
                <Text style={styles.btnText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => removerAluno(item.id)}
              >
                <Text style={styles.btnText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  editBtn: {
    backgroundColor: "#3498db",
    padding: 8,
    borderRadius: 5
  },

  deleteBtn: {
    backgroundColor: "#e74c3c",
    padding: 8,
    borderRadius: 5
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold"
  }
});