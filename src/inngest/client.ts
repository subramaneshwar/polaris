// src/inngest/client.ts
import { sentryMiddleware } from "@inngest/middleware-sentry";
import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app",
  middleware: [sentryMiddleware()],
});
