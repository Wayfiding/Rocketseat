import { redis } from "../redis/client";

interface GetSubscriberInviteClicksParams {
	subscriberId: string;
}
export async function getSubscribersInviteClicks({
	subscriberId,
}: GetSubscriberInviteClicksParams) {
	const count = await redis.hget("refferal:access-count", subscriberId);
	return { count: count ? Number.parseInt(count) : 0 };
}
