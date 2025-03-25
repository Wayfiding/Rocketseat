import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscribersInviteCount } from "../functions/get-subscriber-invite-counts";

export const getSubscribersInviteCountRoute: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get(
		"/subscribers/:subscriberId/ranking/count",
		{
			schema: {
				summary: "Get subscribers invite count",
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
			const { count } = await getSubscribersInviteCount({ subscriberId });
			return { count };
		},
	);
};
