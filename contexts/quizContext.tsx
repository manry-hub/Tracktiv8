"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type QuizContextType = {
    field: string | null;
    role: string | null;
    course: string | null;
    setField: (val: string) => void;
    setRole: (val: string) => void;
    setCourse: (val: string) => void;
    reset: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
    const [field, setField] = useState<string | null>(null);
    const [role, setRole] = useState<string | null>(null);
    const [course, setCourse] = useState<string | null>(null);

    const reset = () => {
        setField(null);
        setRole(null);
        setCourse(null);
    };

    return (
        <QuizContext.Provider
            value={{ field, role, course, setField, setRole, setCourse, reset }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) throw new Error("useQuiz must be used within a QuizProvider");
    return context;
};
