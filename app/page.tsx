"use client";

import { useAuth } from "@/contexts/auth-context";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AuthStatus from "@/components/auth/auth-status";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Paths from "@/components/Paths";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
    const { user } = useAuth();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div className="space-y-8 mt-40">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight">
                    Welcome to Firebase Auth App
                </h1>
                <p className="text-xl text-muted-foreground mt-4">
                    A simple Next.js application with Firebase authentication
                </p>
            </div>
            <AuthStatus />
            {user ? (
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle>Welcome back!</CardTitle>
                        <CardDescription>
                            You are successfully signed in to Tracktiv8
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Signed in as:{" "}
                            <span className="font-medium">{user.email}</span>
                        </p>
                        <Button asChild className="w-full mt-4">
                            <Link href="/dashboard">Go to Dashboard</Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <Card className="max-w-md mx-auto">
                    <CardHeader>
                        <CardTitle>Get Started with Tracktiv8</CardTitle>
                        <CardDescription>
                            Sign in or create an account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <Button asChild className="w-full">
                            <Link href="/sign-in">Sign In</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="w-full bg-transparent"
                        >
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
            <div>
                <Header />
                <Paths />
                <Benefits />
                <Footer />
            </div>
        </div>
    );
}
