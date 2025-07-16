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
                question: "Mana aktivitas yang paling kamu sukai?",
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
                question: "Kamu lebih suka bekerja dengan?",
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
                question: "Kamu lebih tertarik untuk?",
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
                question: "Mana yang lebih membuatmu tertantang?",
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
                    "Dalam sebuah proyek, kamu lebih memilih peran sebagai?",
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
                question: "Mana aktivitas coding yang paling kamu sukai?",
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
                question: "Ketika melihat website, kamu lebih fokus pada?",
                options: [
                    {
                        text: "Tampilan dan animasi",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Depan sampai belakang",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Seberapa cepat dan aman",
                        score: { Backend: 1 },
                    },
                ],
            },
            {
                question: "Tools favorit kamu adalah?",
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
                question: "Saat membuat aplikasi, kamu ingin?",
                options: [
                    {
                        text: "Membangun keseluruhan aplikasi",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Mengubah desain menjadi interaktif.",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Membangun server, database, dan API",
                        score: { Backend: 1 },
                    },
                ],
            },
            {
                question: "Kamu lebih suka memperdalam?",
                options: [
                    {
                        text: "UX/UI, animasi, dan CSS. ",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Arsitektur sistem,  autentikasi, dan security.",
                        score: { Backend: 1 },
                    },
                    {
                        text: " Semua sisi aplikasi ",
                        score: { Fullstack: 1 },
                    },
                ],
            },
            {
                question: "Mana yang lebih membuatmu excited?",
                options: [
                    {
                        text: "Merancang hubungan antar data",
                        score: { Backend: 1 },
                    },
                    {
                        text: " Membangun aplikasi lengkap dari nol",
                        score: { Fullstack: 1 },
                    },
                    {
                        text: "Membuat ui responsive dan user-friendly",
                        score: { Frontend: 1 },
                    },
                ],
            },
            {
                question: "Kamu merasa paling puas ketika?",
                options: [
                    {
                        text: "Server berjalan cepat dan database rapi",
                        score: { Backend: 1 },
                    },
                    {
                        text: "UI indah, dan user-friendly",
                        score: { Frontend: 1 },
                    },
                    {
                        text: "Aplikasi utuh berjalan lancar",
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
                question: "Kamu lebih suka mempelajari?",
                options: [
                    {
                        text: "SEO, social media ads, dll",
                        score: { DigitalMarketing: 1 },
                    },
                    {
                        text: "Coding, sistem jaringan, dll",
                        score: {},
                    },
                ],
            },
        
        ],
    },
};
