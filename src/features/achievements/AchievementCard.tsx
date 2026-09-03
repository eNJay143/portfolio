"use client";

import { useEffect, useRef } from "react";
import { AchievementCategory } from "./achievementsData";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

interface AchievementCardProps {
    category: AchievementCategory;
    index: number;
}

export const AchievementCard = ({ category, index }: AchievementCardProps) => {
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
        <div ref={cardRef} className="w-full opacity-0 h-full">
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
                <div className="p-8 md:p-10 flex flex-col h-full z-10 relative">
                    <h3 className={cn(
                        "flex items-center gap-4 text-lg md:text-xl font-bold text-foreground/90 font-serif border-b pb-4 transition-colors group-hover:text-primary",
                        "border-black/10", "dark:border-white/10"
                    )}>
                        <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md shadow-inner">
                            <category.icon className="w-6 h-6 drop-shadow-[0_0_8px_rgba(87,149,217,0.5)]" />
                        </div>
                        {category.title}
                    </h3>

                    <div className="flex flex-col gap-4 mt-6">
                        {category.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors mt-2 shrink-0" />
                                <p className="text-foreground/80 font-medium leading-relaxed group-hover/item:text-foreground transition-colors text-sm md:text-base">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
};
