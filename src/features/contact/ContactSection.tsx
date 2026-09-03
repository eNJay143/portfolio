"use client";

import FoldText from "@/components/FoldText";
import { contactData } from "./contactData";
import { ContactCard } from "./ContactCard";

export const ContactSection = () => {
    return (
        <section id="contact" className="flex flex-col items-center justify-start pb-24 relative" style={{ paddingTop: '10vh' }}>
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 px-4">

                {/* Section Header */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        <FoldText
                            text="Let's Connect"
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
                            text="Feel free to reach out to me through any of the following platforms."
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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 overflow-hidden">
                    {contactData.map((contact, index) => (
                        <ContactCard key={contact.id} contact={contact} index={index} />
                    ))}
                </div>

            </div>

            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
        </section>
    );
};
