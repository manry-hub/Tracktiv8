"use client";

import { useAuth } from "@/contexts/auth-context";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Paths from "@/components/Paths";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div>
            <Header />
            <Paths />
            <Benefits />
            <Footer />
        </div>
    );
}
