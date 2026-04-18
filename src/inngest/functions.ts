// src/inngest/functions.ts
import { inngest } from "./client";
import { getDefaultTextModel } from "@/lib/ai-model";
import { generateText } from "ai";



export const demoGenerate = inngest.createFunction(
  { id: "demo-generate", triggers: { event: "demo/generate" } },
  async ({ event, step }) => {
    await step.run("generate-text", async () => {
      return await generateText({
        model: getDefaultTextModel(),
        prompt: "Write a vegetarian lasagna recipe for 4 people.",
      });
    });
  },
);
