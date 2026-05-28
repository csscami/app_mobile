import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AlunoForm({
  matricula,
  setMatricula,
  nome,
  setNome,
  email,
  setEmail,
  salvarAluno,
  editando
}) {
  return (
    <View style={styles.container}>

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
        keyboardType="email-address"
      />

      <Button
        title={editando ? "Atualizar aluno" : "Cadastrar aluno"}
        onPress={salvarAluno}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});