"use client";

import { useEffect, useRef, useState } from "react";
import { skillsData } from "./skillsData";

export const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.2 } // Trigger when 20% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-start pb-12 relative overflow-hidden" style={{ paddingTop: '2vh' }}>
            <div className="w-full max-w-5xl flex flex-col items-start gap-8 px-4" ref={sectionRef}>
                <div
                    className={`w-full flex flex-col items-start ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-1000' : 'opacity-0'}`}
                    style={{ animationFillMode: 'forwards' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        Skills
                    </h2>
                </div>
            </div>
        </section>
    );
};
