# ATIVIDADE – DESENVOLVIMENTO DE APLICAÇÃO MOBILE COM REACT NATIVE E ARQUITETURA ORGANIZADA

---

# ETAPA 1 – Compreensão do Problema e do Sistema

O objetivo principal do sistema é realizar o cadastro e gerenciamento de alunos por meio de uma aplicação mobile desenvolvida em React Native.

O sistema permite armazenar informações acadêmicas básicas dos alunos em um banco de dados em nuvem utilizando Firebase Firestore. A aplicação possui funcionalidades de cadastro, listagem, edição e exclusão de registros, seguindo o modelo CRUD.

## Informações cadastradas

* Matrícula
* Nome
* E-mail

Essas informações são enviadas pela interface mobile para a camada de lógica da aplicação e posteriormente armazenadas no banco de dados.

## Operações do Sistema

* Create (Cadastro de alunos)
* Read (Listagem de alunos)
* Update (Edição de alunos)
* Delete (Exclusão de alunos)

## Público-alvo

O usuário final da aplicação será:

* Administrador escolar
* Secretário acadêmico
* Responsável pelo gerenciamento dos alunos cadastrados

## Funcionamento Geral

1. O usuário acessa a interface mobile.
2. Preenche os dados do aluno em um formulário.
3. Envia as informações.
4. A aplicação processa os dados.
5. O sistema realiza comunicação com o Firebase Firestore.
6. Os dados são armazenados ou atualizados.
7. A lista de alunos é atualizada automaticamente.

## Repositório do Projeto

```bash[
https://github.com/seu-usuario/seu-repositorio](https://github.com/csscami/app_mobile/tree/main)
```

---

# ETAPA 2 – Identificação das Tecnologias Utilizadas

| Tecnologia              | Função no Sistema                        | Onde é Utilizada                     | Objetivo                                     |
| ----------------------- | ---------------------------------------- | ------------------------------------ | -------------------------------------------- |
| React Native            | Desenvolvimento da interface mobile      | Screens, Components e navegação      | Criar a interface visual do aplicativo       |
| JavaScript / TypeScript | Implementação da lógica da aplicação     | Controllers, hooks e serviços        | Controlar regras de negócio e fluxo de dados |
| Firebase                | Plataforma backend em nuvem              | Integração da aplicação com serviços | Gerenciar autenticação e conexão com banco   |
| Firestore               | Banco de dados NoSQL em nuvem            | Operações CRUD                       | Armazenar e recuperar os dados dos alunos    |
| React Navigation        | Navegação entre telas                    | Estrutura de rotas                   | Permitir transição entre telas da aplicação  |
| Expo (opcional)         | Ambiente de desenvolvimento React Native | Execução e testes                    | Facilitar desenvolvimento e execução mobile  |

## Explicação das Tecnologias

### React Native

Utilizado para construir a interface gráfica da aplicação mobile, permitindo criar telas, formulários, botões e listas de forma nativa para Android e iOS.

### JavaScript / TypeScript

Responsável pela lógica da aplicação, incluindo validação de dados, chamadas ao Firebase e gerenciamento do fluxo de informações.

### Firebase

Funcionará como plataforma backend, fornecendo integração com o banco de dados em nuvem.

### Firestore

Será utilizado para armazenar os dados dos alunos de forma organizada e sincronizada em tempo real.

---

# ETAPA 3 – Organização em Arquitetura de Desenvolvimento de Sistemas

# Arquitetura Adotada

O projeto será organizado em uma arquitetura baseada em separação de responsabilidades, dividida em três camadas principais.

---

## 1. Camada de Apresentação (UI)

### Pastas/Arquivos

```bash
screens/
components/
App.js
```

### Função

Exibir formulários, listas, botões e telas para interação do usuário.

---

## 2. Camada de Lógica de Aplicação

### Pastas/Arquivos

```bash
services/
controllers/
hooks/
```

### Função

Executar operações CRUD, validar dados e controlar o fluxo da aplicação.

---

## 3. Camada de Dados

### Pastas/Arquivos

```bash
firebase/
config/firebaseConfig.js
```

### Função

Realizar conexão com Firebase Firestore e persistência dos dados.

---

## Comunicação entre as Camadas

A interface envia os dados para os serviços e controllers. Os serviços realizam as operações necessárias e se comunicam com o Firebase Firestore.

Após a conclusão da operação, os dados retornam para a interface atualizada.

### Fluxo Simplificado

```bash
UI → Services/Controllers → Firebase Firestore → Retorno para UI
```

---

# ETAPA 4 – Análise do Fluxo de Dados do Sistema

## Cadastro de Aluno

1. O usuário preenche o formulário.
2. Ao clicar em “Cadastrar”, a interface envia os dados.
3. O controller ou service valida as informações.
4. O Firebase Firestore recebe os dados.
5. O aluno é salvo na coleção `alunos`.
6. A lista de alunos é atualizada na tela.

---

## Listagem de Alunos

1. A tela principal solicita os dados ao serviço.
2. O serviço consulta a coleção `alunos` no Firestore.
3. O banco retorna os registros cadastrados.
4. A interface renderiza os alunos em lista.

---

## Edição de Aluno

1. O usuário seleciona um aluno.
2. Os dados são carregados no formulário.
3. O usuário altera as informações.
4. A aplicação envia os novos dados ao Firestore.
5. O registro é atualizado no banco.
6. A interface atualiza a lista automaticamente.

---

## Exclusão de Aluno

1. O usuário seleciona a opção “Excluir”.
2. A aplicação solicita confirmação.
3. O serviço envia a solicitação ao Firestore.
4. O registro é removido da coleção.
5. A lista é atualizada na interface.

---

# ETAPA 5 – Organização do Código por Responsabilidades

## Componentes Responsáveis pela Interface

### Screens

```bash
HomeScreen.js
CadastroAlunoScreen.js
```

### Components

```bash
AlunoCard.js
FormAluno.js
ButtonCustom.js
```

### Função

Exibir telas, formulários e componentes visuais.

---

## Serviços Responsáveis pelo Cadastro

### Arquivo

```bash
services/alunoService.js
```

### Funções

```javascript
cadastrarAluno()
```

### Função

Enviar novos registros para o Firestore.

---

## Serviços Responsáveis pela Listagem

### Funções

```javascript
listarAlunos()
```

### Função

Recuperar alunos cadastrados.

---

## Serviços Responsáveis pela Edição

### Funções

```javascript
atualizarAluno()
```

### Função

Atualizar informações no banco de dados.

---

## Serviços Responsáveis pela Exclusão

### Funções

```javascript
excluirAluno()
```

### Função

Remover registros do Firestore.

---

## Importância da Separação de Responsabilidades

A separação de responsabilidades facilita:

* Manutenção do sistema
* Organização do código
* Redução do acoplamento
* Facilidade de testes
* Escalabilidade da aplicação

A interface fica responsável apenas pela exibição dos dados, enquanto os serviços controlam as regras de negócio e a comunicação com o banco de dados.

---

# ETAPA 6 – Proposta de Melhoria na Arquitetura

## 1. Criação de Serviços Específicos para Firebase

### Justificativa

* Facilita manutenção
* Evita repetição de código
* Melhora organização
* Permite reutilização das funções CRUD

### Exemplo

```bash
services/alunoService.js
services/firebaseService.js
```

---

## 2. Uso de Hooks Personalizados

### Justificativa

* Código mais limpo
* Reutilização de lógica
* Melhor separação entre UI e regras de negócio
* Facilita escalabilidade

### Exemplo

```bash
hooks/useAlunos.js
```

---

## 3. Melhor Organização de Pastas

### Estrutura sugerida

```bash
components/
screens/
services/
hooks/
navigation/
firebase/
styles/
```

### Benefícios

* Melhor legibilidade
* Facilidade para localizar arquivos
* Crescimento organizado da aplicação

---

# ETAPA 7 – Documentação Final do Sistema

# Nome do Sistema

Sistema Mobile de Cadastro de Alunos

---

# Objetivo

Desenvolver uma aplicação mobile em React Native para gerenciamento de alunos utilizando Firebase Firestore como banco de dados.

---

# Tecnologias Utilizadas

* React Native
* JavaScript / TypeScript
* Firebase
* Firestore
* React Navigation
* Expo

---

# Arquitetura Adotada

Arquitetura baseada em separação de responsabilidades, dividida em:

* Camada de Apresentação
* Camada de Lógica
* Camada de Dados

---

# Funcionalidades Principais

* Cadastro de alunos
* Listagem de alunos
* Atualização de dados
* Exclusão de registros
* Persistência em nuvem

---

# Considerações Finais

O desenvolvimento da aplicação permitiu aplicar conceitos de arquitetura de sistemas, separação de responsabilidades e integração entre interface mobile e banco de dados em nuvem.

A utilização do React Native e Firebase proporcionou um desenvolvimento moderno, organizado e escalável, facilitando futuras melhorias e manutenção do sistema.

Além disso, a divisão em camadas contribui para maior clareza do código e melhor estruturação da aplicação.
