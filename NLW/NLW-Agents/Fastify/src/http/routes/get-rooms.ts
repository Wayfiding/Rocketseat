import { count, eq } from "drizzle-orm";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../../db/connections.ts";
import { schema } from "../../db/schema/index.ts";

export const getRoomsRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/rooms", async () => {
		const results = await db
			.select({ id: schema.rooms.id, name: schema.rooms.name,
                 questionCount: count(schema.questions.id),
                createdAt:schema.rooms.createdAt })
			.from(schema.rooms)
			.leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
			.groupBy(schema.rooms.id, schema.rooms.name)
			.orderBy(schema.rooms.createdAt);
		return results;
	});
};
