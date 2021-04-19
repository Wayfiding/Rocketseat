const express = require('express')
var cookieParser = require('cookie-parser');
const session = require('express-session')
const server = express()
const bodyParser = require('body-parser'); 
const routes = require('./routes')
const path = require("path")
const uuid = require('uuid');

// usando template engine
server.set('view engine','ejs')
server.use(session({secret: 'mySecret', resave: false,genid: function(req) {
    return uuid.v4() // use UUIDs for session IDs
  }, saveUninitialized: false,cookie: {
    maxAge: 60000
  }}));
server.use(cookieParser())
// Muda a localização da pasta views
server.set('views', path.join(__dirname,'views'))

// habilitar arquivos statics
server.use(express.json())
server.use(express.static("public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended:true }));
// usar o req.body
server.use(express.urlencoded({ extended:true }))
// routes
server.use(routes)






server.listen(3000, ()=> console.log('Running'))