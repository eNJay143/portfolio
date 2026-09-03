"use client";

import { useState, useEffect } from "react";
import { careerInterests } from "./data";
import StrokeText from "@/components/StrokeText";

export const HomeSection = () => {
    const fullText = "Building software to solve problems";
    const [isIntroAnimating, setIsIntroAnimating] = useState(true);
    const [isScrollLocked, setIsScrollLocked] = useState(true);

    // Force scroll to top on page load/reload to ensure the intro animation is visible
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Unlock scroll 1 second after intro animation finishes to let other content animate in
    useEffect(() => {
        if (!isIntroAnimating) {
            const timeout = setTimeout(() => {
                setIsScrollLocked(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [isIntroAnimating]);

    // Lock body scroll while intro animations are playing
    useEffect(() => {
        if (isScrollLocked) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        // Cleanup function in case component unmounts
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isScrollLocked]);

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-start pb-12 relative overflow-hidden" style={{ paddingTop: '15vh' }}>

            {/* Background glowing effects for premium feel */}
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] -z-10" />

            <div className="w-full max-w-5xl flex flex-col items-center text-center gap-12 px-4">
                {/* Short Introduction with StrokeText Effect */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight min-h-30 md:min-h-25 leading-tight text-center self-center w-full flex items-center justify-center text-foreground">
                    <div className="w-full">
                        <StrokeText
                            text={fullText}
                            strokeColor="#3b82f6" // blue-500
                            fillColor="#3b82f6"
                            strokeWidth={1.5}
                            drawDuration={2}
                            fillDelay={0.2}
                            stagger={0.06}
                            ease="power2.out"
                            trigger="mount"
                            fillMode="fade"
                            className="font-serif font-bold w-full h-auto"
                            fontSize={72}
                            onComplete={() => setIsIntroAnimating(false)}
                        />
                    </div>
                </h1>

                {/* Two Column Layout for Desktop */}
                {!isIntroAnimating && (
                    <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 md:gap-12">

                        {/* Left Side: Avatar Picture */}
                        <div className="shrink-0 animate-in fade-in zoom-in duration-1000" style={{ animationFillMode: 'backwards' }}>
                            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border shadow-2xl relative bg-secondary/50 flex items-center justify-center">
                                <img src="/profilePicture.jpg" alt="Norman John Bandibas" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Right Side: Left-aligned Text Content */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full" style={{ marginTop: "-10px" }}>

                            {/* Status Badge */}
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150" style={{ animationFillMode: 'backwards' }}>
                                Bachelor of Science in Computer Science • 3rd Year College
                            </div>

                            {/* Name */}
                            <p className="text-xl md:text-2xl font-sans text-foreground/90 max-w-2xl leading-relaxed text-justify animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300" style={{ animationFillMode: 'backwards' }}>
                                Norman John N. Bandibas - Regular, BSCS student and Dost Undergraduate Scholar. Providing software solutions that are practical, data-driven, efficient and usable using my skills and knowledge
                            </p>

                            {/* Interests / Career Goals */}
                            <div className="flex flex-col items-center md:items-start gap-4 mt-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500" style={{ animationFillMode: 'backwards' }}>
                                    Career Focus & Interests
                                </h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {careerInterests.map((interest, index) => (
                                        <span key={interest} className="px-4 py-2 rounded-full bg-card border border-border/70 shadow-sm text-sm font-medium hover:bg-primary/10 hover:border-primary hover:text-primary transition-all cursor-default animate-in fade-in slide-in-from-bottom-7 duration-1000" style={{ animationFillMode: 'backwards', padding: "6px", animationDelay: `${700 + index * 100}ms` }}>
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};
