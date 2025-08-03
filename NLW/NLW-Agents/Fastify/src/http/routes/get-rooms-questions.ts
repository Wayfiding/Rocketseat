import { desc, eq } from "drizzle-orm";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db/connections.ts";
import { schema } from "../../db/schema/index.ts";

export const getRoomsQuestions: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/rooms/:roomId/questions",
		{
			schema: {
				params: z.object({
					roomId: z.string(),
				}),
			},
		},
		async (request) => {
			const { roomId } = request.params;
			const result = await db
				.select({
                    id:schema.questions.id,
                    questions:schema.questions.question,
                    answer:schema.questions.answer,
                    createdAt:schema.questions.createdAt
                    }
                )
				.from(schema.questions)
				.where(eq(schema.questions.roomId, roomId))
				.orderBy(desc(schema.questions.createdAt));
            return result
		},
	);
};
