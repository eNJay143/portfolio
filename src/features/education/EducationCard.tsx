"use client";

import { useEffect, useRef } from "react";
import { EducationItem } from "./educationData";
import { cn } from "@/lib/utils";
import { FaGraduationCap, FaAward, FaUniversity } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface EducationCardProps {
    education: EducationItem;
    index: number;
}

import SpotlightCard from "@/components/SpotlightCard";

export const EducationCard = ({ education, index }: EducationCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        gsap.fromTo(element,
            { 
                opacity: 0, 
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    once: true
                }
            }
        );
    }, [index]);

    return (
        <div ref={cardRef} className="w-full opacity-0">
            <SpotlightCard 
                className={cn(
                    "group relative flex flex-col justify-start h-full rounded-3xl backdrop-blur-xl border hover:border-primary/50 transition-all duration-500 overflow-hidden",
                    "border-black/15", "dark:border-white/10",
                    "bg-black/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]",
                    "dark:bg-black/40 dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]",
                    "[--spotlight-color:rgba(0,0,0,0.15)]", "dark:[--spotlight-color:rgba(255,255,255,0.35)]"
                )}
                spotlightColor="var(--spotlight-color)"
            >

                <div className="p-10 md:p-14 flex flex-col h-full z-10 relative" style={{ padding: "2.5rem" }}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <FaGraduationCap className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold font-sans text-foreground/90 group-hover:text-primary transition-colors leading-tight">
                                {education.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-foreground/70 mt-2 font-medium text-sm md:text-base">
                                <FaUniversity className="w-4 h-4 shrink-0" />
                                <span>{education.university}</span>
                            </div>
                        </div>
                    </div>

                    {education.training && education.training.length > 0 && (
                        <div className="mt-4 pt-6 border-t border-border/50">
                            <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/70 mb-4 flex items-center gap-2">
                                <FaAward className="text-primary w-4 h-4" />
                                Relevant Training / Awards
                            </h4>
                            <div className="flex flex-col gap-3">
                                {education.training.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <p className="text-foreground/90 font-medium leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </SpotlightCard>
        </div>
    );
};
