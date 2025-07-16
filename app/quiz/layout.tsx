import { QuizProvider } from "@/contexts/quizContext";
import { Toaster } from "@/components/ui/sonner";

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
                <Toaster />
            </div>
        </QuizProvider>
    );
}
