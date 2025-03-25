import { redis } from "../redis/client";

interface GetSubscriberInviteCountParams {
	subscriberId: string;
}
export async function getSubscribersInviteCount({
	subscriberId,
}: GetSubscriberInviteCountParams) {
	const count = await redis.zscore("refferal:ranking", subscriberId);
	return { count: count ? Number.parseInt(count) : 0 };
}
