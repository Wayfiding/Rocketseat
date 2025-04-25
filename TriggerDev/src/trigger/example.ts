import { logger, task, wait, schemaTask } from "@trigger.dev/sdk/v3";
import { z } from "zod";
export const helloWorldTask = schemaTask({
  id: "hello-world",
  schema: z.object({
    name: z.string(),
  }),
  
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async ({name}, { ctx }) => {
    logger.log("Hello, world!", { name });

    await wait.for({ seconds: 5 });

    return {
      message: `Hello, ${name}!`,
    }
  },
});