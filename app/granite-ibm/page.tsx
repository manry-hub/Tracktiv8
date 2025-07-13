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
        <div className="mt-10">
            <main className="max-w-3xl mx-auto p-6 mb-5">
                <div className="flex items-center mb-5">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/IBM_granite_2_cubes_logo.svg"
                        alt="logo-granite"
                        width={50}
                        height={50}
                    />

                    <h1 className="text-2xl font-bold ml-2">IBM Granite AI</h1>
                </div>

                <div className="space-y-4 mb-6">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`p-3 rounded max-w-[80%] ${
                                msg.role === "user"
                                    ? "bg-blue-500 text-white self-end ml-auto"
                                    : "bg-gray-200 text-black self-start mr-auto"
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

                <form onSubmit={handleSend} className="flex flex-col mt-10">
                    <textarea
                        className="w-full p-2 rounded text-sm"
                        rows={2}
                        placeholder="Arahkan ai, misalnya: 'kamu adalah ahli software engineer'"
                        value={systemPrompt}
                        onChange={(e) => setSystemPrompt(e.target.value)}
                    />
                    <div className="flex flex-row">
                        <textarea
                            className="w-full p-2 border rounded"
                            rows={3}
                            placeholder="Contoh: Apa saja tugas dari software engineer"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? "Menjawab..." : "Kirim"}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="bg-orange-400 text-white px-4 py-2 rounded"
                        disabled={loading}
                    >
                        {loading ? "Menjawab..." : "Akhiri percakapan"}
                    </button>
                </form>
            </main>
        </div>
    );
}
