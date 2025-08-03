import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { db } from '../../db/connections.ts';
import { schema } from '../../db/schema/index.ts';


export const createRoomsRoute:FastifyPluginAsyncZod = async (app) => {
    app.post('/rooms', {schema:{
        body: z.object({
            name: z.string().min(1),
            description: z.string().optional(),
        })
    }}, async ( request,reply ) => {
        const { name,description } = request.body;
        const results = await db.insert(schema.rooms).values({
            name,
            description,
        }).returning()
        const insertedRoom = results[0]
        if(!insertedRoom) {
            throw new Error('Failed to create room');
        }
        return reply.status(201).send({roomId:insertedRoom.id})
    })
}