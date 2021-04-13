<h1 align="center">Welcome to API NodeJS + Express + Mongo 👋</h1>

![home](./resources/API_running.png)

<p align="center">
  <a href="#💻-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#🚀-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#🔖-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#📝-license">License</a>
</p>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.4.0a-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Wayfiding/Rocketseat/blob/main/serie-node/README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://img.shields.io/github/license/wayfiding/ROCKETSEAT?color=MIT&logo=MIT&logoColor=MIT" target="_blank">
    <img alt="License: https://img.shields.io/github/license/wayfiding/ROCKETSEAT?color=MIT&logo=MIT&logoColor=MIT" src="https://img.shields.io/github/license/wayfiding/ROCKETSEAT?color=MIT&logo=MIT&logoColor=MIT" />
  </a>
</p>

## 💻 Project
 On this project will be created an API REST from Zero with NodeJS, Express and MongoDB

### 🏠 [Homepage](https://github.com/Wayfiding/Rocketseat/tree/main/serie-node)


## How to use:
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

## Usage
To use this application you have to download [Node](https://nodejs.org/en/), install de node.js and open the terminal on the current folder where you download theses files and run these command below.


```sh
npm init -y
```

```sh
 npm install express 
```

```sh
 npm body-parser
```

```sh
 npm mongoose
```

```sh
 npm bcryptjs
```

```sh
 npm jsonwebtoken
```

## Run tests
To test that application you gonna need to follow some steps so you can understand how this back-end app works. The Insomnia and Robo3T is required to test it.


Open your Insomnia on No Enviroment option select 'Manage Enviroments' and create a base url:

```json
{
  "base_url": "localhost:3000"
}
```
After that go back create a folder with name API NodeJS+Express+Mongo. 

And them Create 3 new Requests:

- Authenticate with Post 
- Register with Post
- Projects with Get

After that run this command to start the app :

```sh
node src/index.js
```

First you gonna register an account them you gonna authenticate and after that test the projects route.

![register](./resources/register.png)



## 🚀 Technologies
This Project was developed using the following technologies:


- JavaScript
- NodeJS
- Express
- MongoDB
- bcrypt
- JWT
- Mongoose ODR


## Tools

- Insomnia
- VisualStudio Code
- Robo3T
  
## Author

👤 **Alberto Junior**

* Github: [Alberto Júnior](https://github.com/wayfiding)
* LinkedIn: [Alberto Souza](https://linkedin.com/in/alberto-souza)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Wayfiding/Rocketseat/issues). You can also take a look at the [contributing guide](https://github.com/Wayfiding/Rocketseat/pulls).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Alberto Junior](https://github.com/Test).<br />
This project is [MIT](<img alt=&#34;GitHub&#34; src=&#34;https://img.shields.io/github/license/wayfiding/ROCKETSEAT?color=MIT&logo=MIT&logoColor=MIT&#34;>) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_ and Alberto.
