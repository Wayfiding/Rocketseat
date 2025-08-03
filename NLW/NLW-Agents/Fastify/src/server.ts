import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { createRoomsRoute } from "./http/routes/create-rooms.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { getRoomsQuestions } from "./http/routes/get-rooms-questions.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: ["http://localhost:3333", "http://localhost:5173"],
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", async (request, reply) => {
	return { message: "Hello, World!" };
});

app.register(getRoomsRoute);
app.register(createRoomsRoute);
app.register(getRoomsQuestions);
app.register(createQuestionRoute);
app
	.listen({ port: env.PORT })
	.then(() => {
		console.log("Server is running on http://localhost:3333 🚀");
	})
	.catch((err) => {
		console.error("Error starting server:", err);
		process.exit(1);
	});
