import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";

interface subscribleToEventParams {
	name: string;
	email: string;
}

export async function subscribleToEvent({
	name,
	email,
}: subscribleToEventParams) {
	const result = await db
		.insert(subscriptions)
		.values({ name, email })
		.returning();

	const subscriber = result[0];
	return { subscriberId: subscriber.id };
}
