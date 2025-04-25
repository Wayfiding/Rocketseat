
import { randomUUID } from 'node:crypto';
import { buildRoutePath } from './utils/build-route-path.js';
import { Database } from './database.js';

const database = new Database()
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req,res) => {
            let { search } = req.query
            search = search ? decodeURIComponent(search) : null
            
            const tasks = database.select('tasks', search ? {title:search} : null)
            
            return res
            .end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req,res) => {
            const { title,description } = req.body
            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            }
            database.insert('tasks',task)
            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req,res) => {
            const { id } = req.params
            console.log(id)
            const { title, description } = req.body
            database.update('tasks',id,{title,description})
            return res.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req,res) => {
            const { id } = req.params
            database.delete('tasks',id)
            return res.writeHead(204).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req,res) => {
            const { id } = req.params
            database.update('tasks',id,{completed_at: new Date()})
            return res.writeHead(204).end()
        }
    }
]