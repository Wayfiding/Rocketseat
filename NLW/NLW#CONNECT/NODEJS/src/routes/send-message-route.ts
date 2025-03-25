import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { answerUserMessage } from "../functions/answer-user-message";

export const sendMessageRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		"/messages",
		{
			schema: {
				summary: "Send a message to the AI chat",
				tags: ["AI"],
				description: "Subscribe to an event",
				body: z.object({
					message: z.string(),
				}),
				response: {
					201: z.object({
						res: z.string(),
					}),
				},
			},
		},
		async (req, res) => {
			const { message } = req.body;
			const { response } = await answerUserMessage({ message });
			return { res: response };
		},
	);
};
