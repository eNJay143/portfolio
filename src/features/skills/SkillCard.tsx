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

import PixelCard from "@/components/PixelCard";
import { cn } from "@/lib/utils";

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
                    delay: delay / 1000,
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
        <div ref={cardRef} className="opacity-0 w-full h-full">
            <PixelCard
                variant="blue"
                className={cn(
                    "group relative flex flex-col rounded-3xl backdrop-blur-xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] overflow-hidden h-full",
                    "bg-black/5 border-black/10 hover:border-black/20 hover:bg-black/5",
                    "dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                )}
            >
                <div className="flex flex-col gap-6 w-full h-full relative z-10" style={{ padding: '2rem' }}>
                    <h3 className={cn(
                        "flex items-center gap-4 text-xl md:text-2xl font-bold text-foreground/90 font-serif border-b pb-4 transition-colors group-hover:text-foreground",
                        "border-black/10",
                        "dark:border-white/10"
                    )}>
                        {category.icon && (
                            <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-md shadow-inner">
                                <category.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(87,149,217,0.5)]" />
                            </div>
                        )}
                        {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                            <span
                                key={skill.name}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border hover:bg-primary/15 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 cursor-default shadow-sm",
                                    "bg-black/5 border-black/10",
                                    "dark:bg-white/10 dark:border-white/10"
                                )}
                                style={{ padding: "0.3rem" }}
                            >
                                {skill.icon && <skill.icon className="w-4 h-4" />}
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </PixelCard>
        </div >
    );
};
