import SignUpForm from "@/components/auth/sign-up-form";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="space-y-6 mt-10 md:mt-40">
            <SignUpForm />

            <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                    href="/sign-in"
                    className="font-medium text-primary hover:underline"
                >
                    Sign in here
                </Link>
            </p>
        </div>
    );
}
