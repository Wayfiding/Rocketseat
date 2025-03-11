import { drizzle } from "drizzle-orm/postgres-js";
import postgre from "postgres";
import { env } from "../env";
import { subscriptions } from "./schema/subscriptions";

export const pg = postgre(env.POSTGRES_URL);

export const db = drizzle(pg, { schema: { subscriptions } });
