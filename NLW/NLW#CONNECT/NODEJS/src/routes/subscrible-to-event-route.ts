import { z } from "zod";
import {FastifyPluginAsyncZod} from 'fastify-type-provider-zod'



export const subscribeToEventRoute :FastifyPluginAsyncZod = async (app) =>{

    app.post('/subscriptions',{
        schema: {
            summary: 'Subscribe to an event',
            tags: ['event'],
            description: 'Subscribe to an event',
            body:  z.object({
                    name: z.string(),
                    email: z.string().email()
                }),
            response: {
                201: z.object({
                    name: z.string(),
                    email: z.string().email()
                })
            }
            
        }
    },async (req, res) => {
        const {name, email} = req.body
    
        return res.status(201).send({name, email})
    })
}