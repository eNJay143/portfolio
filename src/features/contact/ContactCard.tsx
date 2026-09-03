"use client";

import { useEffect, useRef } from "react";
import { ContactItem } from "./contactData";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "@/components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

interface ContactCardProps {
    contact: ContactItem;
    index: number;
}

export const ContactCard = ({ contact, index }: ContactCardProps) => {
    const cardRef = useRef<HTMLAnchorElement>(null);

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
                delay: index * 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    once: true
                }
            }
        );
    }, [index]);

    return (
        <a
            ref={cardRef}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full opacity-0 block group/contact"
        >
            <SpotlightCard
                className={cn(
                    "relative flex items-center p-6 md:p-8 rounded-3xl backdrop-blur-xl border hover:border-primary/50 transition-all duration-500 overflow-hidden",
                    "border-black/15", 
                    "dark:border-white/10",
                    "bg-black/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]",
                    "dark:bg-black/40 dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]",
                    "[--spotlight-color:rgba(0,0,0,0.15)]", 
                    "dark:[--spotlight-color:rgba(255,255,255,0.35)]",
                    "hover:bg-primary/5 dark:hover:bg-primary/10"
                )}
            >
                <div className="flex items-center gap-6 z-10 w-full relative">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20 backdrop-blur-md shadow-inner transition-transform duration-300 group-hover/contact:scale-110">
                        <contact.icon className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(87,149,217,0.5)]" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-foreground/70 mb-1 group-hover/contact:text-primary transition-colors">
                            {contact.title}
                        </h3>
                        <p className="text-sm font-bold font-sans text-foreground/90 truncate transition-colors leading-tight">
                            {contact.value}
                        </p>
                    </div>
                </div>
            </SpotlightCard>
        </a>
    );
};
