# ATIVIDADE – DESENVOLVIMENTO DE APLICAÇÃO MOBILE COM REACT NATIVE E ARQUITETURA ORGANIZADA

---

# ETAPA 1 – Compreensão do Problema e do Sistema

## Objetivo do Sistema

O objetivo principal do sistema é realizar o cadastro e gerenciamento de alunos por meio de uma aplicação mobile desenvolvida em React Native com Expo Router.

A aplicação permite armazenar informações acadêmicas básicas dos alunos em um banco de dados em nuvem utilizando Firebase Firestore.

O sistema possui funcionalidades de:

* Cadastro de alunos
* Listagem de alunos
* Atualização de dados
* Exclusão de registros

Seguindo o modelo CRUD.

---

# Informações Cadastradas

Os dados armazenados pelo sistema incluem:

* Matrícula
* Nome
* E-mail

Essas informações são enviadas pela interface mobile para a camada de lógica da aplicação e posteriormente armazenadas no Firebase Firestore.

---

# Operações do Sistema

## Create

Cadastro de novos alunos.

## Read

Listagem dos alunos cadastrados.

## Update

Atualização das informações dos alunos.

## Delete

Exclusão de registros.

---

# Público-Alvo

O sistema é destinado para:

* Administradores escolares
* Secretários acadêmicos
* Responsáveis pelo gerenciamento dos alunos cadastrados

---

# Funcionamento Geral do Sistema

1. O usuário acessa a aplicação mobile.
2. O usuário preenche o formulário de cadastro.
3. Os dados são enviados pela interface.
4. A aplicação processa as informações.
5. O sistema se comunica com o Firebase Firestore.
6. Os dados são armazenados ou atualizados.
7. A lista de alunos é atualizada automaticamente.

---

# Repositório do Projeto

```bash
https://github.com/csscami/app_mobile
```

---

# ETAPA 2 – Identificação das Tecnologias Utilizadas

| Tecnologia                     | Função no Sistema                        | Onde é Utilizada         | Objetivo                                   |
| ------------------------------ | ---------------------------------------- | ------------------------ | ------------------------------------------ |
| React Native                   | Desenvolvimento da interface mobile      | Componentes e telas      | Criar a interface visual do aplicativo     |
| TypeScript                     | Implementação da lógica da aplicação     | Arquivos .tsx e serviços | Garantir tipagem e organização do código   |
| Expo                           | Ambiente de desenvolvimento React Native | Execução da aplicação    | Facilitar desenvolvimento e testes         |
| Expo Router                    | Navegação baseada em arquivos            | Pasta app/               | Gerenciar rotas e navegação entre telas    |
| Firebase                       | Plataforma backend em nuvem              | Integração da aplicação  | Gerenciar comunicação com serviços         |
| Firestore                      | Banco de dados NoSQL em nuvem            | Operações CRUD           | Armazenar e recuperar os dados dos alunos  |
| React Native Safe Area Context | Gerenciamento de área segura             | Layout da aplicação      | Ajustar telas para diferentes dispositivos |

---

# Explicação das Tecnologias

## React Native

Utilizado para construir a interface gráfica da aplicação mobile, permitindo criar telas, formulários, listas e componentes visuais compatíveis com Android e iOS.

---

## TypeScript

Responsável pela implementação da lógica da aplicação com tipagem estática, melhorando organização, manutenção e segurança do código.

---

## Expo

Ferramenta utilizada para facilitar o desenvolvimento da aplicação React Native, permitindo execução simplificada e testes rápidos.

---

## Expo Router

Sistema de navegação baseado em arquivos utilizado pelo projeto.

As rotas são organizadas dentro da pasta:

```bash
src/app/
```

Cada arquivo representa uma tela da aplicação.

---

## Firebase

Plataforma backend utilizada para integração com serviços em nuvem.

---

## Firestore

Banco de dados NoSQL utilizado para armazenar os dados dos alunos de forma organizada e sincronizada em tempo real.

---

# ETAPA 3 – Organização em Arquitetura de Desenvolvimento de Sistemas

# Arquitetura Adotada

O projeto utiliza arquitetura baseada em separação de responsabilidades.

A estrutura é dividida em camadas responsáveis por:

* Interface
* Lógica de aplicação
* Persistência de dados

---

# Estrutura Atual do Projeto

```bash
src/
 ├── app/
 ├── components/
 ├── constants/
 ├── firebase/
 ├── hooks/
 ├── services/
```

---

# 1. Camada de Apresentação (UI)

## Pastas Responsáveis

```bash
app/
components/
```

---

## Função

Responsável por exibir:

* Telas
* Formulários
* Botões
* Listas
* Componentes visuais

A pasta `app/` organiza as telas utilizando Expo Router.

A pasta `components/` contém componentes reutilizáveis da interface.

---

## Exemplos do Projeto

### Arquivos da Navegação

```bash
src/app/_layout.tsx
src/app/index.tsx
src/app/explore.tsx
```

### Componentes

```bash
src/components/
```

---

# 2. Camada de Lógica da Aplicação

## Pastas Responsáveis

```bash
hooks/
services/
```

---

## Função

Executar:

* Operações CRUD
* Regras de negócio
* Validação de dados
* Comunicação com Firebase
* Controle do fluxo da aplicação

---

## Hooks

A pasta `hooks/` contém lógica reutilizável da aplicação.

Exemplo:

```bash
hooks/use-theme.ts
```

---

## Services

A pasta `services/` é responsável pela comunicação com Firebase e operações relacionadas aos dados.

Exemplos de responsabilidades:

* cadastrarAluno()
* listarAlunos()
* atualizarAluno()
* excluirAluno()

---

# 3. Camada de Dados

## Pasta Responsável

```bash
firebase/
```

---

## Função

Responsável pela configuração e comunicação com o Firebase Firestore.

Essa camada realiza:

* Conexão com banco de dados
* Persistência dos dados
* Recuperação de informações
* Atualização de registros
* Exclusão de documentos

---

# Comunicação Entre as Camadas

A interface envia os dados para os serviços.

Os serviços processam as informações e realizam comunicação com o Firebase Firestore.

Após a operação, os dados retornam para a interface atualizada.

---

# Fluxo Simplificado

```bash
UI → Services/Hooks → Firebase Firestore → Retorno para UI
```

---

# ETAPA 4 – Análise do Fluxo de Dados do Sistema

# Cadastro de Aluno

1. O usuário preenche o formulário.
2. A interface envia os dados.
3. Os serviços validam as informações.
4. O Firebase Firestore recebe os dados.
5. O aluno é salvo na coleção correspondente.
6. A interface atualiza automaticamente.

---

# Listagem de Alunos

1. A tela solicita os dados aos serviços.
2. O serviço consulta o Firestore.
3. O banco retorna os registros.
4. A interface renderiza os alunos em lista.

---

# Atualização de Dados

1. O usuário seleciona um aluno.
2. Os dados são carregados no formulário.
3. O usuário altera as informações.
4. Os novos dados são enviados ao Firestore.
5. O registro é atualizado.
6. A interface atualiza automaticamente.

---

# Exclusão de Registros

1. O usuário seleciona a opção de exclusão.
2. A aplicação solicita confirmação.
3. O serviço envia a solicitação ao Firestore.
4. O registro é removido.
5. A interface atualiza a lista automaticamente.

---

# ETAPA 5 – Organização do Código por Responsabilidades

# Componentes Responsáveis pela Interface

## Pasta app/

Responsável pelas telas e navegação da aplicação.

### Exemplos do Projeto

```bash
index.tsx
explore.tsx
_layout.tsx
```

---

## Pasta components/

Responsável pelos componentes reutilizáveis da interface.

### Exemplos encontrados no projeto

```bash
themed-text.tsx
themed-view.tsx
external-link.tsx
web-badge.tsx
```

---

# Responsabilidades da Camada de Serviços

## Pasta services/

Responsável por:

* Comunicação com Firebase
* Operações CRUD
* Regras de negócio
* Processamento dos dados

---

## Exemplos de Funções

```typescript
cadastrarAluno()
listarAlunos()
atualizarAluno()
excluirAluno()
```

---

# Responsabilidades da Camada Firebase

## Pasta firebase/

Responsável pela configuração e integração com Firestore.

---

# Importância da Separação de Responsabilidades

A separação de responsabilidades proporciona:

* Melhor organização do projeto
* Facilidade de manutenção
* Redução do acoplamento
* Melhor reutilização de código
* Facilidade para testes
* Melhor escalabilidade da aplicação

A interface fica responsável apenas pela exibição dos dados.

Os serviços controlam a lógica da aplicação e a comunicação com o banco de dados.

---

# ETAPA 6 – Proposta de Melhoria na Arquitetura

# 1. Criação de Serviços Mais Específicos

## Justificativa

* Melhor organização
* Evita repetição de código
* Facilita manutenção
* Permite reutilização das funções CRUD

---

## Exemplo

```bash
services/alunoService.ts
services/firebaseService.ts
```

---

# 2. Uso de Hooks Personalizados

## Justificativa

* Código mais limpo
* Melhor separação entre interface e lógica
* Reutilização de funcionalidades
* Facilidade de escalabilidade

---

## Exemplo

```bash
hooks/useAlunos.ts
```

---

# 3. Melhor Organização das Pastas

## Estrutura Atual Recomendada

```bash
src/
 ├── app/
 ├── components/
 ├── constants/
 ├── firebase/
 ├── hooks/
 ├── services/
 ├── styles/
```

---

# Benefícios

* Melhor legibilidade
* Facilidade para localizar arquivos
* Crescimento organizado do projeto
* Melhor manutenção futura

---

# ETAPA 7 – Documentação Final do Sistema

# Nome do Sistema

Sistema Mobile de Cadastro de Alunos

---

# Objetivo

Desenvolver uma aplicação mobile utilizando React Native, Expo Router e Firebase Firestore para gerenciamento de alunos.

---

# Tecnologias Utilizadas

* React Native
* TypeScript
* Expo
* Expo Router
* Firebase
* Firestore

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

O desenvolvimento da aplicação permitiu aplicar conceitos de:

* Arquitetura de software
* Organização de projetos React Native
* Separação de responsabilidades
* Integração com banco de dados em nuvem
* Estruturação modular da aplicação

A utilização do React Native com Expo Router proporcionou uma estrutura moderna baseada em rotas organizadas por arquivos.

Além disso, a integração com Firebase Firestore permitiu persistência de dados em nuvem de forma simples e eficiente.

A divisão em camadas melhora a clareza do código, facilita manutenção e contribui para futuras expansões da aplicação.
