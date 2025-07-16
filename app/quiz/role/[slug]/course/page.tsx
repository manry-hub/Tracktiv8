"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
    const params = useParams();
    const slug = params?.slug as string;
    const router = useRouter();

    const [timeOption, setTimeOption] = useState<TimeOption | null>(null);
    const [course, setCourse] = useState<{ name: string; link: string } | null>(
        null
    );

    useEffect(() => {
        if (!timeOption) return;

        const roleResultRaw = localStorage.getItem(`role_result_${slug}`);
        const roleResult = roleResultRaw ? JSON.parse(roleResultRaw) : {};

        const field = localStorage.getItem("recommendedField")?.toLowerCase(); // ini tetap disimpan waktu awal

        let chosenCourse = "";

        if (field === "software") {
            if (timeOption === "pagi") {
                chosenCourse = "Fullstack JavaScript";
            } else {
                const backendScore = roleResult["Backend"] || 0;
                const frontendScore = roleResult["Frontend"] || 0;
                chosenCourse =
                    backendScore >= frontendScore
                        ? "Backend GoLang"
                        : "Frontend React";
            }
        } else if (field === "data") {
            if (timeOption === "pagi") {
                chosenCourse = "Data Science";
            } else if (timeOption === "malam") {
                chosenCourse = "Data Analytics";
            } else {
                const normalizedScores: Record<string, number> = {};
                Object.entries(roleResult).forEach(([key, val]) => {
                    normalizedScores[key.trim().toLowerCase()] = val;
                });
                const ds = roleResult["Science"] || 0;
                const da = roleResult["Analytics"] || 0;
                chosenCourse = ds >= da ? "Data Science" : "Data Analytics";

            }
        } else if (field === "marketing") {
            if (timeOption === "pagi") {
                chosenCourse = ""; // tidak ada
            } else {
                chosenCourse = "Digital Marketing";
            }
        }

        if (chosenCourse) {
            setCourse({ name: chosenCourse, link: courseLinks[chosenCourse] });
            localStorage.setItem("selectedCourse", chosenCourse);
        } else {
            setCourse(null);
        }
    }, [timeOption, slug]);

    return (
        <div className="min-h-screen py-20 px-6 flex flex-col items-center text-center gap-5">
            <h1 className="mt-20 text-xl font-semibold mb-2 text-center px-5">
                Kamu lebih prefer belajar di waktu apa
            </h1>

            <div className=" sm:flex flex-col max-w-2xl sm:flex-row gap-4">
                <Button
                    variant="outline"
                    className="m-2 sm:m-0 hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white"
                    onClick={() => setTimeOption("pagi")}
                >
                    09:00 - 18:00 WIB
                </Button>
                <Button
                    variant="outline"
                    className="m-2 sm:m-0 hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white"
                    onClick={() => setTimeOption("malam")}
                >
                    19:00 - 22:00 WIB
                </Button>
                <Button
                    variant="outline"
                    className="m-2 sm:m-0 hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white"
                    onClick={() => setTimeOption("fleksibel")}
                >
                    Bisa diantara dua itu
                </Button>
            </div>

            {timeOption && (
                <div className="mt-10">
                    {course ? (
                        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl">
                            <h2 className="text-xl font-bold ">
                                Rekomendasi Course Kamu:
                            </h2>
                            <p className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mt-4">
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

            {timeOption && (
                <Button
                    className="mt-20"
                    onClick={() => router.push("/dashboard")}
                >
                    Rekap Hasil ke Dashboard
                </Button>
            )}
        </div>
    );
}
