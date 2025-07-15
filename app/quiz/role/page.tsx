"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fieldMap = {
    marketing: { label: "Marketing", slug: "marketing" },
    software: { label: "Software", slug: "software" },
    data: { label: "Data", slug: "data" },
} satisfies Record<string, { label: string; slug: string }>;

export default function QuizRolePage() {
    const router = useRouter();
    const [fields, setFields] = useState<
        { name: string; value: number; slug: string }[]
    >([]);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const raw = localStorage.getItem("fieldScores");
        if (!raw) return;

        const scores = JSON.parse(raw) as Record<string, number>;
        const total = Object.values(scores).reduce((acc, val) => acc + val, 0);

        const data = Object.entries(scores).map(([key, val]) => {
            const lowerKey = key.toLowerCase();
            const field = fieldMap[lowerKey];
            return {
                name: field?.label || key,
                value: total > 0 ? Math.round((val / total) * 100) : 0,
                slug: field?.slug || "",
            };
        });

        setFields(data);
        setTimeout(() => setAnimate(true), 200);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-black px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-center">
                Bidang Kamu
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
                {fields.map((field, idx) => (
                    <div
                        key={idx}
                        className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
                    >
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 200 200"
                        >
                            <circle
                                className="text-gray-700 "
                                stroke="currentColor"
                                strokeWidth="10"
                                fill="transparent"
                                r="90"
                                cx="100"
                                cy="100"
                            />
                            <circle
                                className="text-orange-400 transition-all duration-1000"
                                stroke="currentColor"
                                strokeWidth="10"
                                fill="transparent"
                                r="90"
                                cx="100"
                                cy="100"
                                strokeDasharray={2 * Math.PI * 90}
                                strokeDashoffset={
                                    animate
                                        ? 2 *
                                          Math.PI *
                                          90 *
                                          (1 - field.value / 100)
                                        : 2 * Math.PI * 90
                                }
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className="flex flex-col items-center justify-center text-center z-10">
                            <span className="text-base md:text-lg font-medium mb-1">
                                {field.name}
                            </span>
                            <span className="text-2xl md:text-3xl font-bold">
                                {field.value}%
                            </span>
                            <button
                                onClick={() =>
                                    router.push(`/quiz/role/${field.slug}`)
                                }
                                className="mt-3 border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-white hover:text-black transition"
                            >
                                Pilih
                            </button>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
}
