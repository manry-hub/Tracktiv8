"use client";

import { useState } from "react";
import Image from "next/image";
type Message = {
    role: "user" | "ai";
    content: string;
};

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [prompt, setPrompt] = useState("");
    const [systemPrompt, setSystemPrompt] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        const newMessages = [...messages, { role: "user", content: prompt }];
        setMessages(newMessages);
        setPrompt("");
        setLoading(true);

        const res = await fetch("/api/stream", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt,
                systemPrompt,
            }),
        });
       
        if (!res.body) {
            setMessages([
                ...newMessages,
                { role: "ai", content: "No response." },
            ]);
            setLoading(false);
            return;
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let aiResponse = "";
        const streamMessage = { role: "ai" as const, content: "" };
        setMessages([...newMessages, streamMessage]);

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            aiResponse += chunk;

            // Update streaming content
            setMessages((prev) =>
                prev.map((msg, idx) =>
                    idx === prev.length - 1
                        ? { ...msg, content: aiResponse }
                        : msg
                )
            );
        }

        setLoading(false);
    };

    return (
        <div className="mt-5">
            <main className="max-w-4xl mx-auto px-4 md:px-6 pb-32">
                <div className="flex items-center mb-5">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/IBM_granite_2_cubes_logo.svg"
                        alt="logo-granite"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-2xl font-bold ml-2">IBM Granite AI</h1>
                </div>

                <div className="space-y-4 mb-6 flex flex-col">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded max-w-[80%] break-words ${
                                msg.role === "user"
                                    ? "bg-blue-500 text-white self-end"
                                    : "bg-gray-200 text-black self-start"
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                    {loading && (
                        <div className="bg-gray-200 p-3 rounded max-w-[80%]">
                            Tunggu sebentar yak...
                        </div>
                    )}
                </div>
            </main>

            {/* Input Form */}
            <form
                onSubmit={handleSend}
                className="container mx-auto fixed bottom-0 inset-x-0  bg-white pb-10 p-4 "
            >
                <div className="max-w-4xl mx-auto flex flex-col space-y-2">
                    <textarea
                        className="w-full p-2 border rounded"
                        rows={3}
                        placeholder="Contoh: Apa saja tugas dari software engineer"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <div className="flex flex-col md:flex-row gap-2">
                        <textarea
                            className="w-full p-2 rounded text-sm border border-gray-300"
                            rows={2}
                            placeholder="Arahkan ai, misalnya: 'kamu adalah ahli software engineer'"
                            value={systemPrompt}
                            onChange={(e) => setSystemPrompt(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? "Menjawab..." : "Kirim"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
