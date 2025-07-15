export const quizData: Record<
    string,
    {
        title: string;
        questions: {
            question: string;
            options: {
                text: string;
                score: Record<string, number>; // e.g. { Analyst: 1, Scientist: 0 }
            }[];
        }[];
    }
> = {
    data: {
        title: "Analyst vs Scientist",
        questions: [
            {
                question: "1. Mana aktivitas yang paling kamu sukai?",
                options: [
                    {
                        text: "Mencoba model-machine learning baru",
                        score: { Scientist: 1 },
                    },
                    {
                        text: "Membuat laporan dan dashboard dari data",
                        score: { Analytics: 1 },
                    },
                ],
            },

            {
                question: "2. Kamu lebih suka bekerja dengan:",
                options: [
                    {
                        text: "Excel, Tableau, Power BI, SQL",
                        score: { Analytics: 1 },
                    },
                    {
                        text: "Python, Jupyter Notebook, TensorFlow",
                        score: { Scientist: 1 },
                    },
                ],
            },
            {
                question: "3. Kamu lebih tertarik untuk:",
                options: [
                    {
                        text: "Membuat sistem yang bisa belajar dari data dan membuat prediksi otomatis.",
                        score: { Scientist: 1 },
                    },
                    {
                        text: " Menganalisis data masa lalu untuk mencari pola",
                        score: { Analytics: 1 },
                    },
                ],
            },
            {
                question: "4. Mana yang lebih membuatmu tertantang",
                options: [
                    {
                        text: "Mengubah data yang kompleks menjadi insight yang mudah dipahami.",
                        score: { Analytics: 1 },
                    },
                    {
                        text: " Menggunakan algoritma untuk memprediksi dan mengotomatiskan keputusan. ",
                        score: { Scientist: 1 },
                    },
                ],
            },
            {
                question:
                    "5. Dalam sebuah proyek, kamu lebih memilih peran sebagai:**",
                options: [
                    {
                        text: " Perancang sistem cerdas yang mempelajari data untuk otomatisasi. ",
                        score: { Scientist: 1 },
                    },
                    {
                        text: "Penyaji informasi data yang bisa membantu keputusan bisnis.",
                        score: { Analytics: 1 },
                    },
                ],
            },
        ],
    },

    software: {
        title: "Frontend vs Backend vs Fullstack",
        questions: [
            {
                question: "1. Mana aktivitas coding yang paling kamu sukai?",
                options: [
                    {
                        text: "Mendesain tampilan antarmuka",
                        score: { Frontend: 1 },
                    },
                    { text: "Mengelola database, API", score: { Backend: 1 } },
                    { text: "Sedikit dari keduanya", score: { Fullstack: 1 } },
                ],
            },
            {
                question: "2. Ketika melihat website, kamu lebih fokus pada:",
                options: [
                    {
                        text: "Tampilan, animasi, dan pengalaman pengguna",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Kombinasi bagaimana semuanya bekerja dari depan sampai belakang",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Seberapa cepat, aman, dan kompleks logika di baliknya.",
                        score: { Backend: 1 },
                    },
                ],
            },
            {
                question: "3. Tools favorit kamu adalah:",
                options: [
                    {
                        text: "Node.js, Golang, PostgreSQL, Express, API.",
                        score: { Backend: 1 },
                    },
                    {
                        text: "HTML, CSS, JavaScript, React/Vue. ",
                        score: { Frontend: 1 },
                    },
                    {
                        text: " Semua di atas! ",
                        score: { Fullstack: 1 },
                    },
                ],
            },
            {
                question: "4. Saat membuat aplikasi, kamu ingin:",
                options: [
                    {
                        text: " Membangun keseluruhan aplikasi dari database sampai tampilannya.  ",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Mengubah desain menjadi antarmuka interaktif.",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Membangun server, otentikasi, database, dan API",
                        score: { Backend: 1 },
                    },
                ],
            },
            {
                question: "5. Kamu lebih suka memperdalam:",
                options: [
                    {
                        text: "UX/UI, komponen interaktif, animasi, dan CSS. ",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Arsitektur sistem, REST API, autentikasi, dan security.. ",
                        score: { Backend: 1 },
                    },
                    {
                        text: " Semua sisi aplikasi dan cara mereka berkomunikasi.  ",
                        score: { Fullstack: 1 },
                    },
                ],
            },
            {
                question: "6. Mana yang lebih membuatmu excited?",
                options: [
                    {
                        text: "Merancang sistem autentikasi dan hubungan antar data.  ",
                        score: { Backend: 1 },
                    },
                    {
                        text: " Membangun aplikasi lengkap dari nol sampai bisa digunakan.  ",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Menyusun komponen UI yang responsive dan user-friendly. ",
                        score: { Frontend: 1 },
                    },
                ],
            },
            {
                question: "7. Kamu merasa paling puas ketika:",
                options: [
                    {
                        text: "Server berjalan cepat, API tidak error, dan database rapi. .  ",
                        score: { Backend: 1 },
                    },
                    {
                        text: "UI berjalan halus, indah, dan user-friendly.  ",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Aplikasi utuh berjalan lancar dari depan sampai belakang.  ",
                        score: { Fullstack: 1 },
                    },
                ],
            },
        ],
    },

    marketing: {
        title: "Digital Marketing",
        questions: [
            {
                question: "1. Kamu lebih suka mempelajari:",
                options: [
                    {
                        text: "SEO, social media ads, dan perilaku konsumen online.",
                        score: { DigitalMarketing: 1 },
                    },
                    {
                        text: "Coding, sistem jaringan, atau manajemen proyek teknis",
                        score: {},
                    },
                ],
            },
        
        ],
    },
};
