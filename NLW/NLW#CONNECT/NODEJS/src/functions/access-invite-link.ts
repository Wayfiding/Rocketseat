import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";

interface AccessInviteLinkParams {
	subscriberId: string;
}

export async function accessInviteLink({
	subscriberId,
}: AccessInviteLinkParams) {
	await redis.hincrby("refferal:access-count", subscriberId, 1);
}
