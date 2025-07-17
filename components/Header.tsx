import Link from "next/link";
import YoutubeEmbed from "./YoutubeEmbed";
import { useState } from "react";

export default function Header() {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section
            data-aos="fade-up"
            id="home"
            className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <div className="rounded-3xl p-8 sm:p-12 lg:p-16 mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Bridge Your Skill
                            <span className="ml-1 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                {" "}
                                With Tracktiv8
                            </span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Analisis dan temukan course yang tepat dengan alat
                            analisis komprehensif kami. Bootcamp Hacktiv8 hadir
                            untuk mendorong pertumbuhan karier Anda
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/quiz">
                                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    Start Quiz
                                </button>
                            </Link>
                            <button
                                onClick={() => setShowVideo(!showVideo)}
                                className="glassmorphism-light text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
                            >
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showVideo && (
                <div className="mt-8 max-w-6xl mx-auto">
                    <YoutubeEmbed />
                </div>
            )}
        </section>
    );
}
