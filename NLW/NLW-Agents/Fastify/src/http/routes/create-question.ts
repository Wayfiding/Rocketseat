import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { db } from '../../db/connections.ts';
import { schema } from '../../db/schema/index.ts';


export const createQuestionRoute:FastifyPluginAsyncZod = async (app) => {
    app.post('/rooms/:roomId/questions', {schema:{
        params:z.object({
            roomId:z.string()
        }),
        body: z.object({
            question: z.string().min(1),
            
        })
    }}, async ( request,reply ) => {
        const  { roomId }= request.params
        const { question } = request.body;
        const results = await db.insert(schema.questions).values({
            roomId,
            question,
        }).returning()
        const insertedQuestion = results[0]
        if(!insertedQuestion) {
            throw new Error('Failed to create room');
        }
        return reply.status(201).send({roomId:insertedQuestion.id})
    })
}