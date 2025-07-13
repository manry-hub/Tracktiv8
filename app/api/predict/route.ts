// app/api/predict/route.ts
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

async function waitForPrediction(predictionId: string) {
    let prediction;
    while (true) {
        prediction = await replicate.predictions.get(predictionId);
        if (prediction.status === "succeeded" || prediction.status === "failed")
            break;
        await new Promise((r) => setTimeout(r, 1000)); // delay 1 detik
    }
    return prediction;
}

export async function POST(req: Request) {
    const body = await req.json();
    const { prompt, systemPrompt } = body;

    const input = {
        top_p: 0.9,
        prompt,
        max_tokens: 512,
        min_tokens: 0,
        temperature: 0.6,
        system_prompt: systemPrompt || "You are a helpful assistant.",
        presence_penalty: 0,
        frequency_penalty: 0,
    };

    const prediction = await replicate.predictions.create({
        version: "ibm-granite/granite-8b-code-instruct-128k",
        input,
    });

    const final = await waitForPrediction(prediction.id);
    return NextResponse.json({ prediction: final });
}
      