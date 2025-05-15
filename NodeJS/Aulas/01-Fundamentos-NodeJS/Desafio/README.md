# 🌟 Desafio 01 - CRUD de Tasks com CSV Import

**Módulo**: Fundamentos do Node.js  
**Trilha**: Ignite Node.js  
**Dificuldade**: Intermediário  

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express) ![TypeScript](https://img.shields.io/badge/TypeScript-Opcional-blue?logo=typescript)

---

## 🎯 Introdução

Bem-vindo(a) ao primeiro desafio da trilha de Node.js!  
Aqui você consolidará os conceitos fundamentais aprendidos no módulo, construindo uma API completa com **CRUD de tasks** e um bônus desafiador: **importação em massa via CSV**.

> 💡 **Dica**: Respire fundo, pesquise e confie no seu processo! O aprendizado aqui é valioso.  
> *"Não é sobre perfeição, é sobre progresso."* — Rocketseat

---

## 📋 Requisitos do Desafio

### 🔧 Funcionalidades Obrigatórias
- [x] **CRUD** de tasks (Create, Read, Update, Delete)
- [x] Marcar task como completa/incompleta
- [x] **Importação em massa** de tasks via arquivo CSV

### 🏷️ Estrutura da Task
| Campo           | Tipo        | Descrição                              |
|-----------------|-------------|----------------------------------------|
| `id`           | `UUID`      | Identificador único                   |
| `title`        | `string`    | Título da task (obrigatório)          |
| `description`  | `string`    | Descrição detalhada                   |
| `completed_at` | `Date`      | Data de conclusão (`null` se incompleta) |
| `created_at`   | `Date`      | Data de criação                       |
| `updated_at`   | `Date`      | Data da última atualização            |

---

## 🚀 Rotas da API

### 📌 POST `/tasks`
**Cria uma nova task**  
✅ Body (JSON):
```json
{
  "title": "Estudar Node.js",
  "description": "Finalizar o desafio 01"
}
```
🔹 Regras:

    created_at, updated_at e id gerados automaticamente

    completed_at inicia como null

### 📌 GET /tasks

Lista todas as tasks
🔹 Filtros opcionais por query params:
bash

/tasks?title=Estudar&description=Node

### 📌 PUT /tasks/:id

Atualiza uma task
✅ Body (JSON):
json

{
  "title": "Estudar Express",
  "description": "Aprender middlewares"
}

🔹 Regras:

    Valida se o id existe

    Atualiza apenas campos enviados

### 📌 DELETE /tasks/:id

Remove uma task

🔹 Regras:

    Valida se o id existe antes de deletar

### 📌 PATCH /tasks/:id/complete

Alterna status completo/incompleto

🔹 Lógica:

    Se completed_at for null, define como data atual

    Se já estiver completo, redefine para null

🎁 Bônus: Importação via CSV

POST /tasks/import

### 📤 Envie um arquivo CSV no formato:


title,description
"Ler livro","Node.js Design Patterns"
"Praticar","Escrever testes"

🔹 Implementado com Streams para eficiência em grandes arquivos.
(Detalhes técnicos: Documentação do Stream)


## 🛠️ Tecnologias Utilizadas

    Node.js (v18+)

    Express (Rotas e middlewares)

    UUID (Geração de IDs únicos)

    CSV Parser (Stream de dados para importação)

    Jest (Opcional para testes)

## 📥 Como Executar

```
# Clone o repositório
git clone https://github.com/seu-user/ignite-nodejs-01.git

# Instale as dependências
npm install

# Inicie a API
npm run dev
```

## 📚 Extras Implementados

    Validação de campos obrigatórios (title e description)

    Mensagens de erro customizadas (ex: "Task não encontrada")

    Filtro combinado (title + description)

## 🎨 Exemplo de Uso
```

POST /tasks
Content-Type: application/json

{
  "title": "Postar no LinkedIn",
  "description": "Compartilhar aprendizado do desafio"
}
```

Resposta:
json
```
{
  "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
  "title": "Postar no LinkedIn",
  "description": "Compartilhar aprendizado do desafio",
  "completed_at": null,
  "created_at": "2023-10-20T12:00:00.000Z",
  "updated_at": "2023-10-20T12:00:00.000Z"
}
```

Feito com 💜 por Alberto Júnior

Inspirado no desafio da Rocketseat