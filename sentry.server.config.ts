// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://8e74b2fe12c10afb56d1df9e3f781dce@o4511242351345664.ingest.us.sentry.io/4511242358554624",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [
    Sentry.vercelAIIntegration,
    Sentry.consoleLoggingIntegration({
      levels: ["log", "warn", "error"],
    }),
  ],
});
