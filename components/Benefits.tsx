import Link from "next/link";
export default function Benefits() {
    return (
        <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="glassmorphism rounded-3xl p-8 sm:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Mengapa Memilih Tracktiv8?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Tracktiv8 adalah platform lengkap untuk membantumu
                            mengidentifikasi, memahami, dan mengatasi
                            kesenjangan keterampilan secara efisien dan terarah.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div
                                data-aos="fade-right"
                                data-aos-delay="200"
                                className="flex items-start space-x-4"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
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
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Analisis Komprehensif
                                    </h3>
                                    <p className="text-gray-600">
                                        Raih pemahaman menyeluruh tentang
                                        kemampuan yang kamu miliki saat ini
                                    </p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="400"
                                className="flex items-start space-x-4"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Rekomendasi yang Dipersonalisasi
                                    </h3>
                                    <p className="text-gray-600">
                                        Dapatkan saran jalur belajar dan kursus
                                        yang dirancang khusus berdasarkan tujuan
                                        karier pribadimu.
                                    </p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="600"
                                className="flex items-start space-x-4"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Visualisasi Dashboard
                                    </h3>
                                    <p className="text-gray-600">
                                        Lacak perkembanganmu secara langsung
                                        melalui dashboard interaktif yang
                                        memvisualisasikan kemajuan dan hasil
                                        analisis secara dinamis.
                                    </p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-delay="800"
                                className="flex items-start space-x-4"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Insight dari Profesional Industri
                                    </h3>
                                    <p className="text-gray-600">
                                        Dapatkan pandangan dan pembaruan
                                        langsung dari para ahli industri agar
                                        kamu selalu selangkah lebih maju dalam
                                        menghadapi tren dan kebutuhan dunia
                                        kerja terkini.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="glassmorphism-light rounded-2xl p-8 text-center">
                            <div className="w-32 h-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                <svg
                                    className="w-16 h-16 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Mulai Perjalananmu Hari Ini
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Bergabunglah dengan ribuan profesional yang
                                telah berhasil memilih course yang tepat mereka
                                bersama Tracktiv8.
                            </p>
                            <Link href="/quiz">
                                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                                    Mulai Sekarang Gratis
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
