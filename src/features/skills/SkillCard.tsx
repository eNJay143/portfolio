"use client";

import { SkillCategory } from "./skillsData";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
    category: SkillCategory;
    delay?: number;
}

export const SkillCard = ({ category, delay = 0 }: SkillCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    delay: delay / 1000, // keep the delay so the initial stagger remains
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className="group relative flex flex-col gap-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] overflow-hidden opacity-0"
            style={{ padding: '2rem' }}
        >
            {/* Subtle glow effect behind the title that fades in on hover */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="relative z-10 flex items-center gap-4 text-xl md:text-2xl font-bold text-foreground/90 font-serif border-b border-white/10 pb-4 transition-colors group-hover:text-foreground">
                {category.icon && (
                    <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-md shadow-inner">
                        <category.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(87,149,217,0.5)]" />
                    </div>
                )}
                {category.title}
            </h3>

            <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-black/20 border border-white/10 hover:bg-primary/15 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 cursor-default shadow-sm"
                        style={{ padding: "0.3rem" }}
                    >
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
