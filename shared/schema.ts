// Database schema — only needed if you're using the Express backend with a PostgreSQL DB.
// For the portfolio frontend, this file is not used.
// To enable: npm install drizzle-orm drizzle-zod pg, and set up a DATABASE_URL env variable.

import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = InsertUser & { id: string };
