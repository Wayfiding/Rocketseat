import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { env } from "../env";
import { accessInviteLink } from "../functions/access-invite-link";
import { subscribleToEvent } from "../functions/subscrible-to-event";

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async (app) => {
	app.get(
		"/invites/:subscriberId",
		{
			schema: {
				summary: "Acces Invite Link and Redirects user",
				tags: ["referral"],
				description: "Subscribe to an event",
				params: z.object({
					subscriberId: z.string(),
				}),
				response: {
					201: z.object({
						subscriberId: z.string(),
					}),
				},
			},
		},
		async (req, res) => {
			const { subscriberId } = req.params;
			console.log(subscriberId);
			const redirectUrl = new URL(env.WEB_URL);
			redirectUrl.searchParams.set("referrer", subscriberId);
			await accessInviteLink({ subscriberId });

			// 301: redirect permanently
			// 302: redirect temporarily
			return res.redirect(redirectUrl.toString(), 302);
		},
	);
};
