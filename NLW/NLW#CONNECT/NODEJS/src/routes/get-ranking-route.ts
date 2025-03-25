import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getRanking } from "../functions/get-ranking";
import { getSubscribersInviteCount } from "../functions/get-subscriber-invite-counts";

export const getRankingRoute: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/ranking",
		{
			schema: {
				summary: "Get rankingt",
				tags: ["referral"],
				response: {
					200: z.object({
						ranking: z.array(
							z.object({
								id: z.string(),
								name: z.string(),
								score: z.number(),
							}),
						),
					}),
				},
			},
		},
		async (req, res) => {
			const { rankingWithScore } = await getRanking();
			return { ranking: rankingWithScore };
		},
	);
};
