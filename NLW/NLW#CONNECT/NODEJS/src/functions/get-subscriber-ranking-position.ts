import { redis } from "../redis/client";

interface GetSubscriberRankingPositionParams {
	subscriberId: string;
}
export async function getSubscriberRankingPosition({
	subscriberId,
}: GetSubscriberRankingPositionParams) {
	const rank = await redis.zrevrank("refferal:ranking", subscriberId);
	if (rank === null) {
		return { position: null };
	}

	return { position: rank + 1 };
}
