import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';
import { extracQueryParams } from './utils/extract-query-params.js';


// UUID => Unique Universal Identifier

// - Criar usuários
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários



// - HTTP
//  - Metódos HTTP
//  - URL


// GET,POST,PUT,PATCH,DELETE,OPTIONS

// GET ==> Buscar uma recurso do Back-End
// POST ==> Criar uma recurso no Back-End
// PUT ==> Editar/Atualizar uma recurso no Back-End
// PATCH ==> Atualizar uma informação especifica de uma recurso no Back-End
// DELETE ==> Deletar uma recurso no Back-End

// GET /users ==> Buscar usuários do Back-End
// POST /users ==> Criar um usuário no Back-End


// Stateful - Stateless
// ----------------------------------------------------------------
// Cabeçalhos (Requisição/resposta) => Metadados
// JSON - JavaScript Object Notation

// HTTP Status Code

// 200 - Ok
// 201 - Created
// 204 - No Content
// 400 - Bad Request
// 401 - Unauthorized
// 404 - Not Found
// 500 - Internal Server Error



// Query Params: URL Stateful => Filtos, Paginação, Não Obrigatórios
// Routes Params: Identificação de recurso
// Request Body: Envio de informações de um formulário

// http://localhost:3333/users?name=Diego

// GET http://localhost:3333/users/1

// DELETE http://localhost:3333/users/1

// POST http://localhost:3333/users

// Edição e remoção


const server = http.createServer (async (req,res)=> {
    const {method,url} = req
    

    await json(req,res);
    const route = routes.find(route => {
        return route.method === method && route.path.test(url) 
    })
    if (route){
        const routeParams = req.url.match(route.path)
        
        const {query,...params} = routeParams.groups
        req.params = params
        req.query = query ? extracQueryParams(query) : {}
        return route.handler(req,res)
    }
    return res.writeHead(404).end()
})

server.listen(3333);
// CommonJS => require
// ESModules => import/export