**Negrito**
_Itálico_

---

# ZelaCidade

## 📌 Sobre o Projeto

A API **ZelaCidade** foi criada para registrar e gerenciar problemas urbanos, como:

- Buracos
- Vazamentos
- Lixo
- Iluminação

Essa API nos permite criar, visualizar, atualizar e deletar ocorrências.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- SQLite
- SQLite3
- Postman
- Nodemon

---

## 📦 Instalação

`npm install`

---

## ▶️ Como Executar

```bash
npm run dev
```

```
http://localhost:3000
```

[Clique aqui](http://localhost:3000)

---

## 🗄️ Banco de Dados

O banco de dados é criado automaticamente ao iniciar o projeto.

```
database.db
```

---

## Tabela

| Campo            | Descrição                 |
| ---------------- | ------------------------- |
| id               | Identificador             |
| tipo_problema    | Tipo da ocorrência        |
| localizacao      | Lugar do problema         |
| descricao        | Detalhes do incidente     |
| prioridade       | Baixa, Média ou Alta      |
| nome_solicitante | Quem registrou            |
| data_registro    | Data da ocorrência        |
| hora_registro    | Hora do registro          |
| status_resolucao | Status (Padrão: Pendente) |

---

## 🔗 Endpoints

```http
GET /
```

Retorna uma página simples com informações da API.

---

### Rota para listar todos os incidentes

```http
 GET /incidentes

```

### Rota para listar todos os incidentes especifico (ID)

```http
 GET /incidentes/:id

```

Ex: /incidentes/1

### Rota para criar um novo incidente

```http
 POST /incidentes

```

### BODY (JSON)

```json
{
  "tipo_problema": "Iluminação",
  "localizacao": "Rua das Flores, 123, Bairro das Margaridas",
  "descricao": "Poste queimado há dias",
  "prioridade": "Média",
  "nome_solicitante": "Ana Clara",
  "data_registro": "16/03/2026",
  "hora_registro": "10:30"
}
```

### Rota para atualizar um incidente

```http
 PUT /incidentes/:id

```

### Body (JSON)

```json
{
  "descricao": "Poste queimado há dias",
  "prioridade": "Média",
  "status_resolucao": "Pendente"
}
```

### Rota para deletar um incidente

```http
DELETE /incidente/:id
```

## 🔐 Segurança

A API utiliza '?' nas queries SQL:

```sql
WHERE id = ?
```

Iso evita o SQL Injection

---

## Conceito

- CRUD
- Rotas com express
- Métodos/Verbos HTTP

---

## Projeto Educacional

Este projeto foi desenvolvido para fins de aprendizado em back-end com Node.js

<!-- ### Rota Inicial

## Esses emojis é um padrão em praticamente TODO README:

## 🚀 Nome da API / Projeto

## 📌 Sobre o Projeto

## 🎯 Objetivo

## 🛠️ Tecnologias

## 📦 Instalação

## ▶️ Como Executar

## ⚙️ Configurações

## 🗄️ Banco de Dados

## 🔗 Endpoints

## 🔐 Segurança

## 📚 Conceitos

## 💡Dicas / Melhorias

## 👩‍💻 Autor

---

## 📖 Descrição

## 🔧 Ferramentas

## 💻 Ambiente

## 📊 Dados

## 🧾 Tabela

## 📡 Requisições

## 📥 Entrada de dados

## 📤 Saída de dados

## 🚫 Bloqueios / proteção

## 🧠 Aprendizado

## 🎓 Educacional

## ⚠️ Atenção

## ❗Importante

## 🤝 Contribuição

## 📄 Licença -->
