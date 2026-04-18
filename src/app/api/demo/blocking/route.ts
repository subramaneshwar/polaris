import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";

export async function POST() {
  const { text } = await generateText({
    model: openai("gpt-5-nano"),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
    experimental_telemetry:{
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    }
  });
  return Response.json({ text });
}

// const { text } = await generateText({
//   model: google("gemini-2.5-flash"),
//   prompt: "Write a vegetarian lasagna recipe for 4 people.",
// });

// return Response.json({ text });
