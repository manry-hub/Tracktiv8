import Replicate from "replicate";
import { NextRequest } from "next/server";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: NextRequest) {
    const { prompt, systemPrompt } = await req.json();

    const stream = new ReadableStream({
        async start(controller) {
            const input = {
                top_p: 0.9,
                prompt,
                max_tokens: 512,
                temperature: 0.6,
                system_prompt: systemPrompt || "You are a helpful assistant.",
                presence_penalty: 0,
                frequency_penalty: 0,
            };

            try {
                for await (const chunk of replicate.stream(
                    "ibm-granite/granite-8b-code-instruct-128k",
                    { input }
                )) {
                    const text = chunk.toString();
                    controller.enqueue(new TextEncoder().encode(text));
                }
                controller.close();
            } catch (err) {
                controller.enqueue(new TextEncoder().encode(`[ERROR]: ${err}`));
                controller.close();
            }
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
        },
    });
}
