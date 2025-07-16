import SignInForm from "@/components/auth/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="space-y-6 mt-10 md:mt-40">
            <SignInForm />

            <p className="text-center text-sm text-muted-foreground">
                {"Don't have an account? "}
                <Link
                    href="/sign-up"
                    className="font-medium text-primary hover:underline"
                >
                    Sign up here
                </Link>
            </p>
        </div>
    );
}
