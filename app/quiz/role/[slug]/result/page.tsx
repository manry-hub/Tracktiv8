"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RoleResultPage() {
    const router = useRouter();
    const params = useParams();
    const slug = params?.slug as string;

    const [scores, setScores] = useState<Record<string, number>>({});

    useEffect(() => {
        const raw = localStorage.getItem(`role_result_${slug}`);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        setScores(parsed);
    }, [slug]);

    const total = Object.values(scores).reduce((a, b) => a + b, 0);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent text-center text-black mt-10">
                Hasil Penilaian Role
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
                {Object.entries(scores).map(([key, val], idx) => {
                    const percent =
                        total > 0 ? Math.round((val / total) * 100) : 0;

                    return (
                        <div
                            key={idx}
                            className="relative bg-white border rounded-xl shadow-md w-64 h-40 p-4 flex flex-col justify-center items-center"
                            data-aos="flip-left"
                        >
                            <span className="text-lg font-semibold capitalize text-gray-800">
                                {key}
                            </span>
                            <span className="text-3xl font-bold text-gray-900 mt-2">
                                {percent}%
                            </span>
                            <div
                                className="absolute bottom-0 left-0 h-2 rounded-b-xl bg-blue-500 transition-all duration-500"
                                style={{ width: `${percent}%` }}
                            />
                        </div>
                    );
                })}
            </div>

            <Button
                onClick={() => router.push(`/quiz/role/${slug}/course`)}
                className="mt-8"
            >
                Lanjut ke Rekomendasi Course
            </Button>
        </div>
    );
}
