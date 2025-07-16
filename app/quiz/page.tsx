"use client";

import AuthGuard from "@/components/auth/auth-guard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const traits = [
    {
        id: "problem_solver",
        name: "Problem Solver",
        fields: ["Software", "Marketing", "Data"],
    },
    { id: "market_insight", name: "Market Insight", fields: ["Marketing"] },
    { id: "data_thinking", name: "Data Thinking", fields: ["Data"] },
    {
        id: "efficiency_focus",
        name: "Efficiency Focus",
        fields: ["Software", "Data"],
    },
    { id: "communicator", name: "Communicator", fields: ["Data", "Marketing"] },
    { id: "logical_mind", name: "Logical Mind", fields: ["Data", "Software"] },
    { id: "trend_watcher", name: "Trend Watcher", fields: ["Marketing"] },
    { id: "pattern_seeker", name: "Pattern Seeker", fields: ["Data"] },
    { id: "tech_curious", name: "Tech Curious", fields: ["Data", "Software"] },
    { id: "creative_thinker", name: "Creative Thinker", fields: ["Marketing"] },
    { id: "builder", name: "Software Builder", fields: ["Software"] },
    {
        id: "decision_maker",
        name: "Decision Maker",
        fields: ["Data", "Marketing"],
    },
];

export default function QuizPage() {
    
    const router = useRouter();
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const toggleTrait = (id: string) => {
        setSelectedTraits((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleSubmit = () => {
        if (!name || !status || selectedTraits.length < 5) {
            toast.error("Lengkapi data diri dan pilih minimal 5 karakteristik.");
            return;
        }

        const scores: Record<string, number> = {
            Marketing: 0,
            Software: 0,
            Data: 0,
        };

        selectedTraits.forEach((id) => {
            const trait = traits.find((t) => t.id === id);
            if (trait) {
                trait.fields.forEach((f) => {
                    scores[f]++;
                });
            }
        });

        

        localStorage.setItem("fieldScores", JSON.stringify(scores));
        
        localStorage.setItem(
            "userProfile",
            JSON.stringify({ name, status })
        );

        router.push("/quiz/role");
    };

    return (
        <AuthGuard>
            <div
                data-aos="fade-down"
                className="container flex flex-col gap-10 mt-20 items-center ounded-lg  max-w-7xl py-10 mx-auto px-6 sm:px-6 lg:px-8"
            >
                {/* Form Data Diri */}
                <div className="text-center">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                        Pilih karakteristik yang menggambarkan dirimu
                    </h1>
                    <p className="text-sm text-gray-500 max-w-lg mx-auto">
                        Minimal 5 ciri khas yang dipilih yaa
                    </p>
                </div>
                <div className="w-full max-w-2xl space-y-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg bg-white"
                    >
                        <option value="">Pilih Status</option>
                        <option value="Software Engineer">
                            Software Engineer
                        </option>
                        <option value="Digital Marketing">
                            Digital Marketing
                        </option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Mahasiswa/Pelajar">
                            Mahasiswa/Pelajar
                        </option>
                    </select>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {traits.map((trait) => (
                        <Button
                            key={trait.id}
                            onClick={() => toggleTrait(trait.id)}
                            variant={
                                selectedTraits.includes(trait.id)
                                    ? "destructive"
                                    : "outline"
                            }
                        >
                            {trait.name}
                        </Button>
                    ))}
                </div>

                <div className="mt-4">
                    <Button onClick={handleSubmit}>
                        Lihat Rekomendasi Role
                    </Button>
                </div>
            </div>
        </AuthGuard>
    );
}
