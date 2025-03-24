import { eq } from "drizzle-orm";
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
	const subscribers = await db
		.select()
		.from(subscriptions)
		.where(eq(subscriptions.email, email));
	if (subscribers.length > 0) {
		return { subscriberId: subscribers[0].id };
	}
	const result = await db
		.insert(subscriptions)
		.values({ name, email })
		.returning();

	const subscriber = result[0];
	return { subscriberId: subscriber.id };
}
