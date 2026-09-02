"use client";

import { SkillCategory } from "./skillsData";

interface SkillCardProps {
    category: SkillCategory;
    delay?: number;
}

export const SkillCard = ({ category, delay = 0 }: SkillCardProps) => {
    return (
        <div
            className="flex flex-col gap-6 rounded-3xl bg-secondary/20 backdrop-blur-md border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/20 animate-in fade-in zoom-in-95 fill-mode-both"
            style={{ animationDelay: `${delay}ms`, animationDuration: '700ms', padding: '1rem' }}
        >
            <h3 className="text-xl font-semibold text-foreground/90 font-serif border-b border-border/50 pb-3">
                {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <span
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full bg-card/50 border border-border/50 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                        style={{ padding: "0.3rem" }}
                    >
                        {skill.icon && <skill.icon className="w-4 h-4" />}
                        {skill.name}
                    </span>
                ))}
            </div>
        </div >
    );
};
