"use client";


import { skillsData } from "./skillsData";
import { SkillCard } from "./SkillCard";
import FoldText from "@/components/FoldText";

export const SkillsSection = () => {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-start pb-12 relative overflow-hidden" style={{ paddingTop: '2vh' }}>
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 px-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        <FoldText
                            text="Technical Skills"
                            splitBy="char"
                            hinge="top"
                            trigger="scroll"
                            duration={0.65}
                            stagger={0.045}
                            ease="power3.out"
                            perspective={700}
                            creaseShading={0.55}
                            fontSize="inherit"
                            fontWeight="inherit"
                            color="inherit"
                        />
                    </h2>
                    <p className="text-foreground/70 mt-3 max-w-2xl text-lg">
                        <FoldText
                            text="A collection of technologies and tools I've worked with as a Computer Science student, ranging from web development to lower-level programming."
                            splitBy="word"
                            hinge="top"
                            trigger="scroll"
                            duration={0.65}
                            stagger={0.02}
                            ease="power3.out"
                            perspective={700}
                            creaseShading={0.55}
                            fontSize="inherit"
                            fontWeight="inherit"
                            color="inherit"
                        />
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {skillsData.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            delay={300 + index * 150}
                        />
                    ))}
                </div>
            </div>

            {/* Background glowing orbs for extra aesthetic */}
            <>
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '5s' }} />
            </>
        </section>
    );
};
