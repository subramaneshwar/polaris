import { inngest } from "@/inngest/client";

const DEFAULT_PROMPT = "Write a vegetarian lasagna recipe for 4 people.";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { prompt?: unknown }
    | null;

  const prompt =
    typeof body?.prompt === "string" && body.prompt.trim()
      ? body.prompt.trim()
      : DEFAULT_PROMPT;

  await inngest.send({
    name: "demo/generate",
    data: { prompt },
  });
  return Response.json({ status: "started", prompt });
}
