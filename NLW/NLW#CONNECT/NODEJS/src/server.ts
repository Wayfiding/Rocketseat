import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";

import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import {
	type ZodTypeProvider,
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "./env";
import { accessInviteLinkRoute } from "./routes/acces-invite-link";
import { getSubscribersInviteClicksRoute } from "./routes/get-subscrible-invite-clicks-routes";
import { subscribeToEventRoute } from "./routes/subscrible-to-event-route";
const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);

app.register(fastifySwagger, {
	openapi: {
		info: {
			title: "Fastify API",
			description: "Description",
			version: "0.1.0",
		},
	},
	transform: jsonSchemaTransform,
});

app.register(fastifySwaggerUi, {
	routePrefix: "/docs",
});

app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscribersInviteClicksRoute);

app.get("/hello", () => {
	return "Hello World";
});
app
	.listen({
		port: env.PORT,
	})
	.then(() => {
		console.log("HTTP server running on http://localhost:3333");
	});
