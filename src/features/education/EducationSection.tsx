"use client";

import { educationData } from "./educationData";
import { EducationCard } from "./EducationCard";
import FoldText from "@/components/FoldText";

export const EducationSection = () => {
    return (
        <section id="education" className="flex flex-col items-center justify-start pb-24 relative" style={{ paddingTop: '10vh' }}>
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 px-4">

                {/* Section Header */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        <FoldText
                            text="Education & Training"
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
                            text="My academic background and specialized training programs."
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

                {/* Grid Layout */}
                <div className="w-full grid grid-cols-1 gap-6 relative z-10 overflow-hidden">
                    {educationData.map((edu, index) => (
                        <EducationCard key={edu.id} education={edu} index={index} />
                    ))}
                </div>

            </div>

            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '5s' }} />
        </section>
    );
};
