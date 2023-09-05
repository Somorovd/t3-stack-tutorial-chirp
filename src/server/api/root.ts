import { createTRPCRouter } from "npm/server/api/trpc";
import { postsRouter } from "./routers/posts";

export const appRouter = createTRPCRouter({
  posts: postsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
