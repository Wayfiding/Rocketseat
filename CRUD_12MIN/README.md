<h1 align="center">
  <img alt="Create an Admin in a few minutes" title="Create an Admin in a few minutes" src="" width="220px" />
</h1>

![home](./resources/Capa.png) AdminBro Crud
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>
<div align="right">
Languages:
[Portuguese :brazil:](README-ptbr.md)
</div>
<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💻 Project
We will play with AdminBro to create our Crud.
https://adminbro.com

### Start with AdminBro

1. Create structure
```sh
mkdir project
cd project
touch admin.js
```
And use  run this command:

```sh
npm init -y
```

2. Install dependencies 
```sh
npm install 
```

Or 

```sh
yarn install
```
3. admin.js

```js
// ============================================
// Admin Bro
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const adminBro = new AdminBro({
  databases: [],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

// ============================================
// Server
const express = require("express");
const server = express();

server
  .use(adminBro.options.rootPath, router)
  .listen(5500, () => console.log("Server started"));
```

### Add Database

1. install dependencies

```sh
npm i @admin-bro/mongoose mongoose
```

2. update admin.js

```js
// ============================================
// Database
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type:String,
    required: true,
  },
  description: String,
  completed: Boolean,
  created_at: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", ProjectSchema);

// ============================================
// Admin Bro
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

// use mongoose in AdminBro
AdminBro.registerAdapter(AdminBroMongoose)

// config
const adminBroOptions = new AdminBro({
	resources: [Project],
  rootPath: '/admin'
})
const router = AdminBroExpress.buildRouter(adminBroOptions)


// ============================================
// Server
const express = require("express");
const server = express();

server
  .use(adminBroOptions.options.rootPath, router)

// =============================================
// Run App
const run = async () => {
  await mongoose.connect("mongodb://localhost/adminbroapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });

  await server.listen(5500, () => console.log("Server started"));
}

run()
```

### Customize

https://adminbro.com/tutorial-customizing-resources.html

1. Change Project menu name and add options to resource

```js
const adminBroOptions = new AdminBro({
	resources: [
    { resource: Project, 
      options: {
      properties: {
        description: { type: 'richtext' },
        created_at: {
          isVisible: { edit: false, list: true, show: true, filter: true }
        }
      }
   }
  },
],
  locale: {
    translations: {
      labels: {
        Project: 'Meus Projetos'
      }
    }
  },
  rootPath: '/admin'
})
```

## 🚀 Technologies
This Project was developed using the following technologies:
- Code Editor
- Node.js
- Mongo
- Terminal

## Tools
- Code Editor
- Node.js
- Mongo
- Terminal

## 🔖 Layout
Você pode visualizar o layout do projeto através [desse link](#).

## How to Use
If you want download this folder from this repository just follow this steps below:

1. Copy the url from your browser;
2. Replace the 'tree/main' or 'tree/master' with trunk;

Example: 
> https://github.com/User/somerepo/tree/main/folderyouwant
> https://github.com/User/somerepo/trunk/folderyouwant 

3.Go to the command Line and just grab the folder with SVN
```sh
    svn checkout https://github.com/User/somerepo/trunk/folderyouwant 
```

## Install
To use this application you have to download Node and run:
```sh
npm install 
```

## Usage
```sh
node admin.js
```

## Author
👤 **Alberto Junior**
* Github: [Alberto Júnior](https://github.com/wayfiding)
* LinkedIn: [Alberto Souza](https://linkedin.com/in/alberto-souza)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

## Show your support
Give a ⭐️ if this project helped you!

## 📝 License
Esse projeto está sob a licença MIT. 
---
Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator) and Alberto_
