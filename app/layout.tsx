import type React from "react";
import type { Metadata } from "next";
import GraniteChatWidget from "@/components/GraniteChatWidget";

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
            <body className="font-poppins bg-gray-100">
                <AuthProvider>
                    <Navbar />
                    <main className="container mx-auto ">{children}</main>

                    {/* Widget Granite AI */}
                    <GraniteChatWidget />
                </AuthProvider>
            </body>
        </html>
    );
}
