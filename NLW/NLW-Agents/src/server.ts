import { fastify } from 'fastify';

import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
} from 'fastify-type-provider-zod';

import { fastifyCors } from '@fastify/cors';
import { env } from './env.ts';
import { getRoomsRoute } from './http/routes/get-rooms.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: 'http://localhost:3333',
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/', async (request, reply) => {
    return { message: 'Hello, World!' };
});

app.register(getRoomsRoute)

app.listen({port: env.PORT }).then(() => {
    
    console.log('Server is running on http://localhost:3333 🚀');
}).catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});