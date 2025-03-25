import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberRankingPosition } from "../functions/get-subscriber-ranking-position";

export const getSubscribersRankingPositionRoute: FastifyPluginAsyncZod = async (
	app,
) => {
	app.get(
		"/subscribers/:subscriberId/ranking/position",
		{
			schema: {
				summary: "Get subscribers ranking position",
				tags: ["referral"],
				description: "Subscribe to an event",
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					200: z.object({
						position: z.number().nullable(),
					}),
				},
			},
		},
		async (req, res) => {
			const { subscriberId } = req.params;
			const { position } = await getSubscriberRankingPosition({
				subscriberId,
			});
			return { position };
		},
	);
};
