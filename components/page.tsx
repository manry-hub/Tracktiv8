"use client";

import { useEffect, useState } from "react";

import AuthGuard from "@/components/auth/auth-guard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { doc, setDoc, getDoc } from "firebase/firestore";
import { useAuth } from "@/contexts/auth-context"; // pastikan useAuth mengembalikan user.uid
import { db } from "@/lib/firebase";

export default function DashboardPage() {
    const { user } = useAuth(); // ambil user dari context

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
                } else {
                    console.warn("Tidak ada data untuk user ini.");
                }
            } catch (error) {
                console.error("Gagal mengambil data:", error);
            }
        };

        fetchData();
    }, [user]);
    const resetFirebaseData = async () => {
        if (!user) {
            alert("Kamu harus login terlebih dahulu.");
            return;
        }

        const konfirmasi = confirm(
            "Yakin ingin mereset semua data dari Firebase?"
        );
        if (!konfirmasi) return;

        try {
            await setDoc(doc(db, "users", user.uid), {});

            alert("Data berhasil dihapus dari Firebase.");
            window.location.reload(); // refresh tampilan dashboard
        } catch (error) {
            console.error("Gagal menghapus data:", error);
            alert("Terjadi kesalahan saat menghapus data.");
        }
    };

    return (
        <AuthGuard>
            <div className="space-y-6">
                <div className=" py-20 px-6 max-w-7xl mx-auto">
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
                        onClick={resetFirebaseData}
                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                    >
                        Reset Semua Data
                    </button>
                </div>
            </div>
        </AuthGuard>
    );
}
