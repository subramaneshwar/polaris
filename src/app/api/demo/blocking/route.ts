import { generateText } from "ai";
import { getDefaultTextModel } from "@/lib/ai-model";


export async function POST() {
  const { text } = await generateText({
    model: getDefaultTextModel(),
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
  });
  return Response.json({ text });
}
