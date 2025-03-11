import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { subscribleToEvent } from "../functions/subscrible-to-event";

export const subscribeToEventRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/subscriptions",
		{
			schema: {
				summary: "Subscribe Someone to the Event",
				tags: ["Subscription"],
				description: "Subscribe to an event",
				body: z.object({
					name: z.string(),
					email: z.string().email(),
				}),
				response: {
					201: z.object({
						subscriberId: z.string(),
					}),
				},
			},
		},
		async (req, res) => {
			const { name, email } = req.body;
			const { subscriberId } = await subscribleToEvent({ name, email });
			return res.status(201).send({ subscriberId });
		},
	);
};
