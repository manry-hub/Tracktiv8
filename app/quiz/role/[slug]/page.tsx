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
    const handleBackClick = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-xl w-full" data-aos="fade-left">
                
                <h2 className="text-xl font-semibold mb-2 text-center">{question.question}</h2>
                <div className="space-y-3 py-10">
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
                <div className="flex justify-end items-center">
                    {step > 0 && (
                        <Button
                            onClick={handleBackClick}
                            variant="ghost"
                            className=""
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2z"
                                />
                            </svg>
                        </Button>
                    )}
                <p className="text-right text-sm  text-black">
                    {step + 1} / {quiz.questions.length}
                </p>
                </div>
            </div>
        </div>
    );
}
