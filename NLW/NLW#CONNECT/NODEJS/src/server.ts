import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors"

import { 
    validatorCompiler,
    serializerCompiler,
    ZodTypeProvider,
    jsonSchemaTransform
 } from "fastify-type-provider-zod";
import {fastifySwagger} from "@fastify/swagger"
import { fastifySwaggerUi} from "@fastify/swagger-ui"
import { subscribeToEventRoute } from "./routes/subscrible-to-event-route";
import { env } from "./env";
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors)

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Fastify API',
            description: 'Description',
            version: '0.1.0',
        },
    },
    transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.register(subscribeToEventRoute)


app.get ('/hello', () => {
    return 'Hello World'
})
app.listen({
    port: env.PORT}).then(() => {
        console.log('HTTP server running on http://localhost:3333')
    })
