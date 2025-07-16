"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    if (pathname.startsWith("/granite-ibm")) {
        return null;
    }
    const { user, logout, loading } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Failed to log out:", error);
        }
    };
    return (
        <nav className="fixed top-0 w-full z-50 bg-white rounded-b-full ">
            <nav className=" max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-center">
                <div className="container flex justify-between h-16 items-center w-full">
                    <div className="mr-4 flex items-center gap-2">
                        <Image
                            src="/icon-tracktiv8.png"
                            alt="icon-tracktiv"
                            width={50}
                            height={50}
                            className="mb-2 ml-1"
                        />
                        <Link href="/">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                Tracktiv8
                            </h1>
                        </Link>
                    </div>

                    <div className="flex items-center  space-x-2 ">
                        {loading ? (
                            <div className="h-8 w-20 animate-pulse bg-muted rounded" />
                        ) : user ? (
                            <div className="flex items-center sm:space-x-4">
                                <div className="flex items-center space-x-2 ">
                                    <User className="h-4 w-4" />
                                    <Link href="/dashboard">
                                        <span className="text-sm sm:flex hidden">
                                            {user.email}
                                        </span>
                                    </Link>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogout}
                                    className="hover:bg-orange-400 hover:text-white"
                                >
                                    <LogOut className="h-4 w-4 mr-2 " />
                                    <span className="sm:flex hidden">
                                        Log Out
                                    </span>
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    className="hover:bg-orange-400 hover:text-white"
                                    size="sm"
                                    asChild
                                >
                                    <Link href="/sign-in">Sign In</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </nav>
    );
}
