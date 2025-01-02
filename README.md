# Landing Page Bons Fluidos

## Descrição do Projeto  
A Landing Page - Bons Fluidos foi desenvolvida como parte de um projeto de extensão da UTFPR, campus Cornélio Procópio. O objetivo é dar maior visibilidade ao projeto Bons Fluidos, que combate a pobreza menstrual na cidade, selecionando meninas para receber doações de absorventes e promovendo palestras educativas sobre o tema.

A aplicação apresenta:

Landing Page: Explicando os objetivos, ações e funcionamento do projeto.
Blog: Onde membros e voluntários podem postar conteúdos relacionados à temática.
Agenda: Uma página que organiza e filtra eventos postados como categorias específicas do blog.

---

## Índice  
  - [Pré-requisitos](#pré-requisitos)  
  - [Ferramentas Utilizadas](#ferramentas-utilizadas)  
  - [Como Configurar e Executar](#como-configurar-e-executar)  
  - [Testando o Sistema](#testando-o-sistema)  
  - [Contas de Acesso](#contas-de-acesso)  
  - [Equipe](#equipe)  

---

## Pré-requisitos  
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:  
  - [Git](https://git-scm.com/) para clonar o repositório.  
  - [Node.js](https://nodejs.org/) na versão `18.17.0` para instalar e executar o projeto.  
  - Um editor de código, como [VS Code](https://code.visualstudio.com/).  

---

## Ferramentas Utilizadas  
### Frontend:
  - Node.js (v18.17.1 ou superior)
  - React (v18.3.1)
  - Vite (v5.4.10)
  - TailwindCSS (v3.4.16)
  - Axios (v1.7.7)
  - React Router DOM (v6.28.0)

### Backend:

  - Node.js (v18.17.1 ou superior)
  - Express (v4.21.1)
  - Sequelize (v6.37.5)
  - SQLite3 (v5.1.7)

---

## Como Configurar e Executar  

### 1. Clonar o Repositório  
``` 
git clone https://github.com/marialeonel/Certificadora_Identitaria_BonsFluidos.git
cd Certificadora_Identitaria_BonsFluidos
```

### 2. Configurar o Backend
#### 2.1. Entre na pasta backend:
```
cd backend
```

#### 2.2. Instale as dependências:
```
npm install
```

#### 2.3. Inicie o servidor do backend:
```
npm start
```

### 3. Configurar o Frontend
#### 3.1. Entre na pasta frontend:
```
cd frontend
```

#### 3.2. Instale as dependências:
```
npm install
```

#### 3.3. Inicie o servidor do backend:
```
npm run dev
```
---

## Testando o Sistema
### Objetivo do Sistema
  O projeto visa dar mais visibilidade às ações do Bons Fluidos, educar sobre a pobreza menstrual e divulgar eventos relacionados ao tema.

### Funcionalidades Desenvolvidas

- **Página Inicial**:  
  - Seção de apresentação do projeto.  
  - Exibição das últimas notícias, estatísticas e informações sobre doações.

- **Footer**:  
  - Informações de contato.

- **Página de Blog**:  
  - Listagem das postagens de conteúdo e eventos.

- **Input de Busca**:  
  - Filtra as postagens com base no título e no conteúdo.

- **Funcionalidades para Usuário Logado**:  
  - Botão para adicionar novos posts, abrindo um modal para cadastro.  
  - Botão de edição para atualizar posts, com modal preenchido com os dados originais.  
  - Botão para excluir posts.

- **Página do Post Singular**:  
  - Exibe o conteúdo completo de uma postagem.

- **Página de Eventos**:  
  - Exibe apenas os posts da categoria "Evento", funcionando como uma agenda de eventos.

- **Página de Login**:  
  - Permite acesso apenas aos voluntários do projeto, habilitando as funcionalidades de CRUD no blog. Não possui opção de cadastro.
  - Página de login que não permite cadastro, permitindo que apenas os voluntários do projeto acessem as funcionalidades de CRUD do blog.

### Roteiro para Testes
  - Inicie o sistema seguindo o passo a passo acima ([Como Configurar e Executar](#como-configurar-e-executar))
  - Acesse o front-end pelo endereço:
  ```
  http://localhost:5173
  ```
  - Para testar a funcionalidade de blog:
    - Acesse a rota:
      ```
      http://localhost:5173/login
      ```
    - Realize o cadastro com as credenciais abaixo ([Contas de Acesso](#contas-de-acesso))
    - Após o login ser feito com sucesso, será redirecionado à página onde se dispõem as postagens, e surgirá o botão 'Adicionar novo post', o qual permitirá o cadastro do mesmo.
    - Ao entrar na página singular de um post, se estiver logado, é possível editar as informações do respectivo post ou excluir o mesmo.
    - Ao cadastrar um post como evento no input de categoria, na página de eventos, é feita a filtragem dos posts que tem evento como categoria, servindo como uma agenda de eventos.

---

### Contas de Acesso
  - User 1:
    - Email: userprojeto1@gmail.com
    - Senha: password1
  - User 2:
    - Email: userprojeto2@gmail.com
    - Senha: password2

---

### Equipe

Este projeto foi desenvolvido pelas alunas Gabriella Ribeiro de Melo e Costa, Giovanna Dias Ferreira, Maria Fernanda Leonel Bertelli e Maria Clara Furini
