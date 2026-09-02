"use client";

import { useState, useEffect } from "react";
import { careerInterests } from "./data";

export const HomeSection = () => {
    const fullText = "Building software to solve problems";
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [isScrollLocked, setIsScrollLocked] = useState(true);

    useEffect(() => {
        let i = 0;
        // Wait 500ms before starting the typing animation to let the page load
        const initialDelay = setTimeout(() => {
            const intervalId = setInterval(() => {
                setDisplayedText(fullText.substring(0, i + 1));
                i++;
                if (i === fullText.length) {
                    clearInterval(intervalId);
                    setIsTyping(false);
                }
            }, 60); // 60ms per character

            return () => clearInterval(intervalId);
        }, 500);

        return () => clearTimeout(initialDelay);
    }, []);

    // Unlock scroll 2 seconds after typing finishes to let other animations complete
    useEffect(() => {
        if (!isTyping) {
            const timeout = setTimeout(() => {
                setIsScrollLocked(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isTyping]);

    // Lock body scroll while typing and intro animations are playing
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
                {/* Short Introduction with Typewriter Effect */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-serif tracking-tight flex flex-wrap items-center justify-center min-h-30 md:min-h-25 leading-tight text-center self-center w-full">
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">
                        {displayedText}
                    </span>
                    {isTyping && (
                        <span className="inline-block w-1 h-[1em] ml-1 bg-primary animate-pulse align-middle shrink-0"></span>
                    )}
                </h1>

                {/* Two Column Layout for Desktop */}
                {!isTyping && (
                    <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8 md:gap-12">

                        {/* Left Side: Avatar Picture */}
                        <div className="shrink-0 animate-in fade-in zoom-in duration-1500" style={{ animationFillMode: 'backwards' }}>
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
                            <p className="text-xl md:text-2xl font-sans text-muted-foreground max-w-2xl leading-relaxed text-justify animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-500" style={{ animationFillMode: 'backwards' }}>
                                Norman John N. Bandibas - Regular, BSCS student and Dost Undergraduate Scholar. Providing software solutions that are practical, data-driven, efficient and usable using my skills and knowledge
                            </p>

                            {/* Interests / Career Goals */}
                            <div className="flex flex-col items-center md:items-start gap-4 mt-2">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-1000" style={{ animationFillMode: 'backwards' }}>
                                    Career Focus & Interests
                                </h3>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {careerInterests.map((interest, index) => (
                                        <span key={interest} className="px-4 py-2 rounded-full bg-card border border-border/70 shadow-sm text-sm font-medium hover:bg-primary/10 hover:border-primary hover:text-primary transition-all cursor-default animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-100" style={{ animationFillMode: 'backwards', padding: "6px", animationDelay: `${1500 + index * 100}ms` }}>
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
