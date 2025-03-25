import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

import { getSubscribersInviteClicks } from "../functions/get-subscribers-invite-clicks";

export const getSubscribersInviteClicksRoute: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get(
		"/subscribers/:subscriberId/ranking/clicks",
		{
			schema: {
				summary: "Get subscribers invite clicks",
				tags: ["referral"],
				description: "Subscribe to an event",
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					200: z.object({
						count: z.number(),
					}),
				},
			},
		},
		async (req, res) => {
			const { subscriberId } = req.params;
			const { count } = await getSubscribersInviteClicks({ subscriberId });
			return { count };
		},
	);
};
