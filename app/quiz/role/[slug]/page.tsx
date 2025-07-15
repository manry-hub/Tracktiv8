"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { quizData } from "@/data/quiz";
import { Button } from "@/components/ui/button";

export default function RoleDetailPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const [step, setStep] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});

    const quiz = quizData[slug];

    if (!quiz) return <div>Role tidak ditemukan</div>;

    const handleOptionClick = (score: Record<string, number>) => {
        const newScores = { ...scores };
        Object.entries(score).forEach(([key, value]) => {
            newScores[key] = (newScores[key] || 0) + value;
        });
        setScores(newScores);

        const nextStep = step + 1;
        if (nextStep < quiz.questions.length) {
            setStep(nextStep);
        } else {
            
            localStorage.setItem(
                `role_result_${slug}`,
                JSON.stringify(newScores)
            );
            router.push(`/quiz/role/${slug}/result`);
        }
    };

    const question = quiz.questions[step];

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="max-w-xl w-full">
                <h1 className="text-xl font-bold mb-4">{quiz.title}</h1>
                <h2 className="text-lg mb-2">{question.question}</h2>
                <div className="space-y-3">
                    {question.options.map((option, idx) => (
                        <Button
                            key={idx}
                            onClick={() => handleOptionClick(option.score)}
                            variant="outline"
                            className="w-full"
                        >
                            {option.text}
                        </Button>
                    ))}
                </div>
                <p className="text-right text-sm text-muted mt-4">
                    {step + 1} / {quiz.questions.length}
                </p>
            </div>
        </div>
    );
}
