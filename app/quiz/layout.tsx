import { QuizProvider } from "@/contexts/quizContext";

export default function QuizLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <QuizProvider>
            <div className="">
                {/* Progress bar bisa di sini */}
                {children}
            </div>
        </QuizProvider>
    );
}
