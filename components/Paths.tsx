import Link from "next/link";
export default function Paths() {
    return (
        <section id="categories" className="py-16 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Jelajahi Jalur Kariermu
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Pilih dari berbagai fields dan role untuk mendapatkan
                        analisis kesenjangan keterampilan yang dipersonalisasi
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Link
                        href={
                            "https://www.hacktiv8.com/full-stack-javascript-immersive"
                        }
                    >
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Fullstack
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Menguasai pengembangan software dengan tech
                                stack javascript dalam sisi Front End maupun
                                Back End
                            </p>
                            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                    <Link href={"https://www.hacktiv8.com/bootcamp-frontend"}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Front End
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Belajar membangun UI/UX interaktif dengan React
                                & Next.js dalam kurikulum AI-powered yang
                                relevan dengan industri.
                            </p>
                            <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                    <Link href={"https://www.hacktiv8.com/bootcamp-golang"}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Back End
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Kuasai pengembangan backend dengan Golang dalam
                                kurikulum AI-powered yang sesuai kebutuhan
                                industri.
                            </p>
                            <button className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                    <Link href={"https://www.hacktiv8.com/data-science"}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="800"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Data Science & Data Analyst
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Kuasai Data Science, Machine Learning, Deep
                                Learning, dan Big Data.
                            </p>
                            <button className="text-red-600 font-semibold hover:text-red-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                    <Link href={"https://www.hacktiv8.com/data-analytics"}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Comprehensive Data Analytics
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Kuasai data analytics dari nol hingga mahir
                                dengan kurikulum AI-powered yang selaras dengan
                                kebutuhan industri.
                            </p>
                            <button className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                    <Link href={"https://www.hacktiv8.com/digital-marketing"}>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="1100"
                            className="glassmorphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Digital Marketing
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Belajar strategi digital marketing terkini
                                dengan kurikulum AI-powered yang relevan dengan
                                industri.
                            </p>
                            <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
                                Explore Roles →
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
