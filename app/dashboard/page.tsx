"use client";

import { useEffect, useState } from "react";
import AuthGuard from "@/components/auth/auth-guard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "@/contexts/auth-context";
import { db } from "@/lib/firebase";
import { toast } from "sonner"; // pastikan sudah diimpor

export default function DashboardPage() {
    const { user } = useAuth();
    const [profile, setProfile] = useState(null);
    const [field, setField] = useState(null);
    const [fieldScores, setFieldScores] = useState(null);
    const [role, setRole] = useState([]);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!user) return;
            try {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProfile(data.profile || null);
                    setField(data.field || null);
                    setFieldScores(data.fieldScores || null);
                    setRole(data.roles || []);
                    if (data.course) {
                        const courseMap = {
                            "Fullstack JavaScript":
                                "https://www.hacktiv8.com/full-stack-javascript-immersive",
                            "Backend GoLang":
                                "https://www.hacktiv8.com/bootcamp-golang",
                            "Frontend React":
                                "https://www.hacktiv8.com/bootcamp-frontend",
                            "Data Science":
                                "https://www.hacktiv8.com/data-science",
                            "Data Analytics":
                                "https://www.hacktiv8.com/data-analytics",
                            "Digital Marketing":
                                "https://www.hacktiv8.com/digital-marketing",
                        };
                        setCourse({
                            name: data.course.name,
                            link: courseMap[data.course.name] || "#",
                        });
                    }
                }
            } catch (error) {
                console.error("Gagal mengambil data:", error);
            }
        };
        fetchData();
    }, [user]);

    return (
        <AuthGuard>
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-10">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mt-10">
                        Summary Of All
                    </h1>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white shadow-lg rounded-xl">
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">
                                Profile
                            </h2>
                            {profile && (
                                <div className="space-y-1">
                                    <p>
                                        <strong>Nama:</strong> {profile.name}
                                    </p>
                                    <p>
                                        <strong>Status:</strong>{" "}
                                        {profile.status}
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="p-6 bg-white shadow-lg rounded-xl">
                            <h2 className="text-xl font-semibold mb-2 text-gray-700">
                                Course Recomendation
                            </h2>
                            {course ? (
                                <div>
                                    <p className="text-lg font-medium text-gray-800">
                                        {course.name}
                                    </p>
                                    <a
                                        href={course.link}
                                        target="_blank"
                                        className="text-blue-500 underline"
                                    >
                                        {course.link}
                                    </a>
                                </div>
                            ) : (
                                <p className="text-red-600">
                                    Belum memilih course
                                </p>
                            )}
                        </div>
                    </div>

                    {role.length > 0 && (
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                                Your Role is
                            </h2>
                            <div className="space-y-4">
                                {role.map((r, i) => {
                                    const total = role.reduce(
                                        (sum, item) => sum + item.score,
                                        0
                                    );
                                    const percent =
                                        total > 0
                                            ? Math.round(
                                                  (r.score / total) * 100
                                              )
                                            : 0;
                                    return (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>{r.name}</span>
                                                <span>{percent}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-orange-400 h-3 rounded-full"
                                                    style={{
                                                        width: `${percent}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    {fieldScores && (
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                                Your field is
                            </h2>
                            <div className="flex justify-center flex-wrap gap-6">
                                {Object.entries(fieldScores).map(
                                    ([key, value], idx) => {
                                        const total = Object.values(
                                            fieldScores
                                        ).reduce((acc, val) => acc + val, 0);
                                        const percent =
                                            total > 0
                                                ? Math.round(
                                                      (value / total) * 100
                                                  )
                                                : 0;
                                        return (
                                            <div
                                                key={idx}
                                                className="relative w-32 h-32"
                                            >
                                                <svg
                                                    viewBox="0 0 200 200"
                                                    className="w-full h-full"
                                                >
                                                    <circle
                                                        r="90"
                                                        cx="100"
                                                        cy="100"
                                                        stroke="#E5E7EB"
                                                        strokeWidth="10"
                                                        fill="transparent"
                                                    />
                                                    <circle
                                                        r="90"
                                                        cx="100"
                                                        cy="100"
                                                        stroke="#F97316"
                                                        strokeWidth="10"
                                                        fill="transparent"
                                                        strokeDasharray={
                                                            2 * Math.PI * 90
                                                        }
                                                        strokeDashoffset={
                                                            2 *
                                                            Math.PI *
                                                            90 *
                                                            (1 - percent / 100)
                                                        }
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <span className="text-sm font-medium text-gray-700 capitalize">
                                                        {key}
                                                    </span>
                                                    <span className="text-xl font-bold text-gray-900">
                                                        {percent}%
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-row justify-center gap-4 pt-6">
                        <Link href="/">
                            <Button variant="outline">Kembali</Button>
                        </Link>
                        <Link href="/quiz">
                            <Button variant="destructive">Quiz Ulang</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}
