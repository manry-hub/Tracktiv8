"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const courseLinks: Record<string, string> = {
    "Fullstack JavaScript":
        "https://www.hacktiv8.com/full-stack-javascript-immersive",
    "Backend GoLang": "https://www.hacktiv8.com/bootcamp-golang",
    "Frontend React": "https://www.hacktiv8.com/bootcamp-frontend",
    "Data Science": "https://www.hacktiv8.com/data-science",
    "Data Analytics": "https://www.hacktiv8.com/data-analytics",
    "Digital Marketing": "https://www.hacktiv8.com/digital-marketing",
};

type TimeOption = "pagi" | "malam" | "fleksibel";

export default function CourseRecommendationPage() {
    const router = useRouter();
    const [timeOption, setTimeOption] = useState<TimeOption | null>(null);
    const [course, setCourse] = useState<{ name: string; link: string } | null>(
        null
    );

    useEffect(() => {
        if (!timeOption) return;

        const field = localStorage.getItem("recommendedField")?.toLowerCase();
        const fieldScores = JSON.parse(
            localStorage.getItem("fieldScores") || "{}"
        ) as Record<string, number>;
        const roleResultKeys = Object.keys(localStorage).filter((k) =>
            k.startsWith("role_result_")
        );
        const roleResult = roleResultKeys.length
            ? (JSON.parse(
                  localStorage.getItem(roleResultKeys[0]) || "{}"
              ) as Record<string, number>)
            : {};

        let chosenCourse = "";

        if (field === "software") {
            if (timeOption === "pagi") {
                chosenCourse = "Fullstack JavaScript";
            } else if (timeOption === "malam") {
                chosenCourse = getHigherScoreCourse(
                    roleResult,
                    "Frontend React",
                    "Backend GoLang"
                );
            } else {
                chosenCourse = getHigherScoreCourse(
                    roleResult,
                    "Frontend React",
                    "Backend GoLang"
                );
            }
        } else if (field === "data") {
            if (timeOption === "pagi") {
                chosenCourse = "Data Science";
            } else if (timeOption === "malam") {
                chosenCourse = "Data Analytics";
            } else {
                chosenCourse = getHigherScoreCourse(
                    roleResult,
                    "Data Science",
                    "Data Analytics"
                );
            }
        } else if (field === "marketing") {
            if (timeOption === "pagi") {
                chosenCourse = ""; // tidak bisa ikut
            } else {
                chosenCourse = "Digital Marketing";
            }
        }

        if (chosenCourse) {
            setCourse({ name: chosenCourse, link: courseLinks[chosenCourse] });
        } else {
            setCourse(null); // tidak bisa ikut course
        }
    }, [timeOption]);

    const getHigherScoreCourse = (
        score: Record<string, number>,
        a: string,
        b: string
    ): string => {
        const aKey = a.toLowerCase().includes("frontend")
            ? "frontend"
            : a.toLowerCase().includes("backend")
            ? "backend"
            : a.toLowerCase().includes("science")
            ? "science"
            : a.toLowerCase().includes("analytics")
            ? "analytics"
            : "";

        const bKey = b.toLowerCase().includes("frontend")
            ? "frontend"
            : b.toLowerCase().includes("backend")
            ? "backend"
            : b.toLowerCase().includes("science")
            ? "science"
            : b.toLowerCase().includes("analytics")
            ? "analytics"
            : "";

        const aScore = score[aKey] || 0;
        const bScore = score[bKey] || 0;

        return aScore >= bScore ? a : b;
    };
    const handleTimeSelect = (time: "pagi" | "malam" | "fleksibel") => {
        // Misalnya sudah ada recommendedField dan roleResult
        const recommendedField = localStorage.getItem("recommendedField");
       const roleResultRaw = localStorage.getItem("roleResult");

        const roleResult = roleResultRaw ? JSON.parse(roleResultRaw) : {};

        let chosenCourse = "";

        if (recommendedField === "Software") {
            if (time === "pagi") chosenCourse = "Fullstack JavaScript";
            else if (time === "malam") {
                // Berdasarkan skor role tertinggi antara backend/frontend
                const backendScore = roleResult["Backend"] || 0;
                const frontendScore = roleResult["Frontend"] || 0;
                chosenCourse =
                    backendScore >= frontendScore
                        ? "Backend GoLang"
                        : "Frontend React";
            } else {
                // fleksibel
                const backendScore = roleResult["Backend"] || 0;
                const frontendScore = roleResult["Frontend"] || 0;
                const fullstackScore = roleResult["Fullstack"] || 0;
                const max = Math.max(
                    fullstackScore,
                    backendScore,
                    frontendScore
                );
                chosenCourse =
                    max === fullstackScore
                        ? "Fullstack JavaScript"
                        : max === backendScore
                        ? "Backend GoLang"
                        : "Frontend React";
            }
        } else if (recommendedField === "Data") {
            if (time === "pagi") chosenCourse = "Data Science";
            else if (time === "malam") chosenCourse = "Data Analytics";
            else {
                const ds = roleResult["Data Science"] || 0;
                const da = roleResult["Data Analytics"] || 0;
                chosenCourse = ds >= da ? "Data Science" : "Data Analytics";
            }
        } else if (recommendedField === "Marketing") {
            if (time === "pagi") {
                alert(
                    "Maaf, tidak tersedia course untuk waktu pagi di bidang Marketing."
                );
                return;
            } else {
                chosenCourse = "Digital Marketing";
            }
        }

        // Simpan ke localStorage
        localStorage.setItem("selectedCourse", chosenCourse);

        // Redirect ke dashboard
        router.push("/dashboard");
    };
      
    return (
        <div className="min-h-screen py-20 px-6 flex flex-col items-center text-center gap-8">
            <h1 className="text-3xl font-bold">Pilih Waktu Belajar</h1>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" onClick={() => setTimeOption("pagi")}>
                    09:00 - 18:00 WIB
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setTimeOption("malam")}
                >
                    19:00 - 22:00 WIB
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setTimeOption("fleksibel")}
                >
                    Fleksibel
                </Button>
            </div>

            {timeOption && (
                <div className="mt-10">
                    {course ? (
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl">
                            <h2 className="text-xl font-semibold">
                                Rekomendasi Course Kamu:
                            </h2>
                            <p className="text-2xl font-bold mt-2">
                                {course.name}
                            </p>
                            <a
                                href={course.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline mt-2 inline-block"
                            >
                                Lihat Course di Hacktiv8
                            </a>
                        </div>
                    ) : (
                        <p className="text-red-600 text-lg font-medium mt-4">
                            Maaf, tidak tersedia course untuk waktu tersebut.
                        </p>
                    )}
                </div>
            )}
            <div className="flex gap-4">
                <Button onClick={() => handleTimeSelect("pagi")}>
                    Saya hanya bisa pagi
                </Button>
                <Button onClick={() => handleTimeSelect("malam")}>
                    Saya hanya bisa malam
                </Button>
                <Button onClick={() => handleTimeSelect("fleksibel")}>
                    Saya fleksibel
                </Button>
            </div>
        </div>
    );
}
