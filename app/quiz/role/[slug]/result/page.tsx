"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RoleResultPage() {
    const router = useRouter();
    const params = useParams();
    const slug = params?.slug as string;

    const [scores, setScores] = useState<Record<string, number>>({});
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const raw = localStorage.getItem(`role_result_${slug}`);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        setScores(parsed);
        setTimeout(() => setAnimate(true), 200);
    }, [slug]);

    const total = Object.values(scores).reduce((a, b) => a + b, 0);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-center text-black">
                Hasil Penilaian Role
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
                {Object.entries(scores).map(([key, val], idx) => {
                    const percent =
                        total > 0 ? Math.round((val / total) * 100) : 0;

                    return (
                        <div
                            key={idx}
                            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
                        >
                            <svg
                                className="absolute top-0 left-0 w-full h-full"
                                viewBox="0 0 200 200"
                            >
                                <circle
                                    className="text-gray-300"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                    r="90"
                                    cx="100"
                                    cy="100"
                                />
                                <circle
                                    className="text-blue-500 transition-all duration-1000"
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
                                              (1 - percent / 100)
                                            : 2 * Math.PI * 90
                                    }
                                    strokeLinecap="round"
                                />
                            </svg>

                            <div className="flex flex-col items-center justify-center text-center z-10">
                                <span className="text-base md:text-lg font-medium mb-1 capitalize">
                                    {key}
                                </span>
                                <span className="text-2xl md:text-3xl font-bold">
                                    {percent}%
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Button
                onClick={() => router.push(`/quiz/course-recomendation`)}
                className="mt-6"
            >
                Lanjut ke Rekomendasi Course
            </Button>
        </div>
    );
}
