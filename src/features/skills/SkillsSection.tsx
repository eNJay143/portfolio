"use client";

import { useEffect, useRef, useState } from "react";
import { skillsData } from "./skillsData";
import { SkillCard } from "./SkillCard";

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
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 px-4" ref={sectionRef}>
                <div
                    className={`w-full flex flex-col items-start ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-1000' : 'opacity-0'}`}
                    style={{ animationFillMode: 'forwards' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        Technical Skills
                    </h2>
                    <p className="text-foreground/70 mt-3 max-w-2xl text-lg">
                        A collection of technologies and tools I've worked with as a Computer Science student, ranging from web development to lower-level programming.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {isVisible && skillsData.map((category, index) => (
                        <SkillCard 
                            key={category.title} 
                            category={category} 
                            delay={300 + index * 150} 
                        />
                    ))}
                </div>
            </div>
            
            {/* Background glowing orbs for extra aesthetic */}
            {isVisible && (
                <>
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '5s' }} />
                </>
            )}
        </section>
    );
};
