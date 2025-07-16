"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // pakai icon biar seperti chatbot
import Image from "next/image";

export default function GraniteChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<
        { role: "user" | "ai"; content: string }[]
    >([]);
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
            body: JSON.stringify({ prompt, systemPrompt }),
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
        setMessages([...newMessages, { role: "ai", content: "" }]);

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            aiResponse += chunk;
            setMessages((prev) =>
                prev.map((msg, i) =>
                    i === prev.length - 1
                        ? { ...msg, content: aiResponse }
                        : msg
                )
            );
        }

        setLoading(false);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {open && (
                <div className="w-[320px] sm:w-[380px] bg-white rounded-xl shadow-xl flex flex-col h-[500px] overflow-hidden border border-gray-300">
                    <div className="flex items-center justify-between p-3 bg-black text-white">
                        <div className="flex items-center gap-2">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/b/bd/IBM_granite_2_cubes_logo.svg"
                                alt="logo"
                                width={28}
                                height={28}
                            />
                            <span className="font-semibold text-sm">
                                Granite AI Assistant
                            </span>
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <ChevronDown size={20} />
                        </button>
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`max-w-[80%] rounded px-3 py-2 text-sm ${
                                    msg.role === "user"
                                        ? "bg-blue-500 text-white self-end ml-auto"
                                        : "bg-gray-200 text-black self-start"
                                }`}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {loading && (
                            <div className="text-gray-500 text-sm">
                                Sedang menjawab...
                            </div>
                        )}
                    </div>

                    <form
                        onSubmit={handleSend}
                        className="bg-white border-t p-3 space-y-1"
                    >
                        <textarea
                            className="w-full p-2 border text-sm rounded"
                            rows={2}
                            placeholder="Masukkan pertanyaan kamu..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <textarea
                            className="w-full p-1 border text-xs rounded"
                            rows={1}
                            placeholder="Prompt sistem opsional"
                            value={systemPrompt}
                            onChange={(e) => setSystemPrompt(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white rounded py-2 text-sm"
                        >
                            {loading ? "Menjawab..." : "Kirim"}
                        </button>
                    </form>
                </div>
            )}

            {/* Tombol Peluncur */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="bg-black text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition"
                >
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/bd/IBM_granite_2_cubes_logo.svg"
                        alt="granite"
                        width={24}
                        height={24}
                    />
                    <span className="hidden sm:inline text-sm">
                        Tanya Granite
                    </span>
                    <ChevronUp size={20} />
                </button>
            )}
        </div>
    );
}
