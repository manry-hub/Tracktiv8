import type React from "react";
import type { Metadata } from "next";

import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Tracktiv8",
    description: "career track system + recomendation Hacktiv8 course",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-poppins">
                <AuthProvider>
                    <Navbar />
                    <main className="container mx-auto ">{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
