import AuthGuard from "@/components/auth/auth-guard";
export default function QuizPage() {
    return (
        <AuthGuard>
            <div className="h-64 flex justify-center items-center bg-green-200 rounded-lg shadow-md">
                <div className="bg-green-500 text-white p-8 rounded-lg text-center">
                    <p>analyz start begin</p>
                </div>
            </div>
        </AuthGuard>
    );
}
