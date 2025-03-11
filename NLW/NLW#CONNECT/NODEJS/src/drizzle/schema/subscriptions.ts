import { timestamp } from "drizzle-orm/pg-core";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const subscriptions = pgTable("subscriptions", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});
