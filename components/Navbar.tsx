"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";

export default function Navbar() {
    const { user, logout, loading } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };
    return (
        <nav className="fixed top-0 w-full z-50 glassmorphism ">
            <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="container flex h-14 items-center">
                    <div className="mr-4 flex">
                        <Link href="/">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                Tracktiv8
                            </h1>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center  space-x-2 justify-end">
                        {loading ? (
                            <div className="h-8 w-20 animate-pulse bg-muted rounded" />
                        ) : user ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <User className="h-4 w-4" />
                                    <span className="text-sm">
                                        {user.email}
                                    </span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="hover:bg-orange-400 hover:text-white"
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Log Out
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/sign-in">Sign In</Link>
                                </Button>
                                <Button size="sm" asChild>
                                    <Link
                                        className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                                        href="/sign-up"
                                    >
                                        Sign Up
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </nav>
    );
}
