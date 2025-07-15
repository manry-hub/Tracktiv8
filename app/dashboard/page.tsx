"use client";

import { useEffect, useState } from "react";

import AuthGuard from "@/components/auth/auth-guard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    const [profile, setProfile] = useState<{
        name: string;
        age: string;
        status: string;
    } | null>(null);
    const [field, setField] = useState<string | null>(null);
    const [fieldScores, setFieldScores] = useState<Record<
        string,
        number
    > | null>(null);
    const [role, setRole] = useState<{ name: string; score: number }[]>([]);
    const [course, setCourse] = useState<{ name: string; link: string } | null>(
        null
    );

    useEffect(() => {
        const user = localStorage.getItem("userProfile");
        const field = localStorage.getItem("recommendedField");
        const scores = localStorage.getItem("fieldScores");

        const roleKeys = Object.keys(localStorage).filter((key) =>
            key.startsWith("role_result_")
        );
        const courseMap = {
            "Fullstack JavaScript":
                "https://www.hacktiv8.com/full-stack-javascript-immersive",
            "Backend GoLang": "https://www.hacktiv8.com/bootcamp-golang",
            "Frontend React": "https://www.hacktiv8.com/bootcamp-frontend",
            "Data Science": "https://www.hacktiv8.com/data-science",
            "Data Analytics": "https://www.hacktiv8.com/data-analytics",
            "Digital Marketing": "https://www.hacktiv8.com/digital-marketing",
        };

        if (user) setProfile(JSON.parse(user));
        if (field) setField(field);
        if (scores) setFieldScores(JSON.parse(scores));

        if (roleKeys.length > 0) {
            const result = JSON.parse(
                localStorage.getItem(roleKeys[0]) || "{}"
            ) as Record<string, number>;
            const sorted = Object.entries(result)
                .map(([name, score]) => ({ name, score }))
                .sort((a, b) => b.score - a.score);
            setRole(sorted);
        }

        const selectedCourse = Object.keys(courseMap).find(
            (courseName) =>
                window.localStorage.getItem("selectedCourse") === courseName
        );

        if (selectedCourse) {
            setCourse({
                name: selectedCourse,
                link: courseMap[selectedCourse],
            });
        }
    }, []);

    return (
        <AuthGuard
        >
            <div className="space-y-6">
               
                <div className=" py-20 px-6 max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                    {profile && (
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">
                                Data Diri
                            </h2>
                            <p>
                                <strong>Nama:</strong> {profile.name}
                            </p>
                            <p>
                                <strong>Status:</strong> {profile.status}
                            </p>
                           
                        </div>
                    )}

                    {field && fieldScores && (
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">
                                Hasil Field
                            </h2>
                            <p className="mb-2">
                                <strong>Field yang Direkomendasikan:</strong>{" "}
                                {field}
                            </p>
                            <ul className="list-disc pl-6">
                                {Object.entries(fieldScores).map(
                                    ([key, value]) => (
                                        <li key={key}>
                                            {key}: {value}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )}

                    {role.length > 0 && (
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">
                                Hasil Role
                            </h2>
                            <ul className="list-disc pl-6">
                                {role.map((r, i) => (
                                    <li key={i}>
                                        {r.name}: {r.score}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {course ? (
                        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
                            <h2 className="text-xl font-semibold mb-2">
                                Course yang Direkomendasikan
                            </h2>
                            <p>
                                <strong>{course.name}</strong> –{" "}
                                <a
                                    href={course.link}
                                    target="_blank"
                                    className="text-blue-500 underline"
                                >
                                    Lihat Course
                                </a>
                            </p>
                        </div>
                    ) : (
                        <div className="text-red-600 text-lg">
                            Belum memilih course
                        </div>
                    )}
                </div>
                <div className=" text-center">
                    <button
                        onClick={() => {
                            if (confirm("Yakin ingin mereset semua data?")) {
                                localStorage.clear();
                                window.location.reload();
                            }
                        }}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Reset Semua Data
                    </button>
                </div>

               </div>
        </AuthGuard>
    );
}
