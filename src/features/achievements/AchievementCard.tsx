"use client";

import { useEffect, useRef } from "react";
import { AchievementCategory } from "./achievementsData";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/SpotlightCard";
import { FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

interface AchievementCardProps {
    category: AchievementCategory;
    index: number;
    className?: string;
}

export const AchievementCard = ({ category, index, className }: AchievementCardProps) => {
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
        <div ref={cardRef} className={cn("w-full opacity-0 h-full", className)}>
            <SpotlightCard
                className={cn(
                    "group relative flex flex-col justify-start h-full rounded-3xl backdrop-blur-xl border hover:border-primary/50 transition-all duration-500 overflow-hidden",
                    "border-black/15", "dark:border-white/10",
                    "bg-black/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]",
                    "dark:bg-black/40 dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]",
                    "[--spotlight-color:rgba(0,0,0,0.15)]", "dark:[--spotlight-color:rgba(255,255,255,0.35)]"
                )}
                spotlightColor="var(--spotlight-color)"
                style={{ padding: "1rem" }}
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

                    <div className="flex flex-col gap-0 mt-6">
                        {category.items.map((item, i) => {
                            const isCert = typeof item === "object" && item !== null;
                            const text = isCert ? (item as any).name : item as string;
                            const link = isCert ? (item as any).pdfLink : undefined;

                            return link ? (
                                <div key={i} className="flex items-center justify-between gap-0 group/item w-full py-2 hover:bg-white/5 dark:hover:bg-black/20 transition-colors border-b border-border/50 last:border-0"
                                    style={{ paddingBottom: "1rem", paddingTop: "1rem" }}
                                >
                                    <span className="text-foreground/80 font-medium leading-relaxed group-hover/item:text-primary transition-colors text-sm md:text-base flex-1">
                                        {text}
                                    </span>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-primary/20 backdrop-blur-sm text-xs md:text-sm font-semibold"
                                        style={{ padding: "0.2rem" }}
                                    >
                                        View PDF <FaExternalLinkAlt className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    </a>
                                </div>
                            ) : (
                                <div key={i} className="flex items-center gap-3 group/item w-full">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors shrink-0" />
                                    <p className="text-foreground/80 font-medium leading-relaxed group-hover/item:text-foreground transition-colors text-sm md:text-base">
                                        {text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
};
