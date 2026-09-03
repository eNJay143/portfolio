"use client";

import { useState, useRef, useEffect } from "react";
import { Project } from "./projectsData";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: 0.1,
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
    }, [index]);

    return (
        <div ref={cardRef} className="opacity-0 w-full h-full">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger
                    nativeButton={false}
                    render={
                        <div className={cn(
                            "group relative flex flex-col justify-start h-full rounded-b-3xl backdrop-blur-xl border border-black/15 dark:border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer",
                            "bg-secondary/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]",
                            "dark:bg-secondary/20 dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                        )}
                        />
                    }
                >
                    {/* Image Section */}
                    {project.outputImage && (
                        <div className="relative w-full h-48 sm:h-56 overflow-hidden shrink-0">
                            <img
                                src={project.outputImage}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient overlay to blend image into the card */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                    )}

                    {/* Details Section */}
                    <div className="relative z-10 flex flex-col gap-4 grow" style={{ padding: "1.5rem" }}>
                        <h3 className="text-2xl font-bold font-serif text-foreground/90 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-foreground/70 line-clamp-2">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                            {project.technologies.map((tech) => (
                                <span key={tech} className={cn(
                                    "inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full border shadow-sm",
                                    "bg-black/5 border-black/10 text-foreground/80",
                                    "dark:bg-white/10 dark:border-white/10 dark:text-foreground/80",
                                    "hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300"
                                )}
                                    style={{ padding: "0.2rem" }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </DialogTrigger>

                <DialogContent className="sm:max-w-2xl bg-background/80 backdrop-blur-2xl border-border/50 shadow-2xl rounded-3xl overflow-hidden p-0 gap-0">
                    {project.outputImage && (
                        <div className="w-full h-64 sm:h-80 relative overflow-hidden shrink-0">
                            <img
                                src={project.outputImage}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
                        </div>
                    )}
                    <div className="p-8 flex flex-col gap-6" style={{ padding: "1.5rem" }}>
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold font-serif text-foreground/90">{project.title}</DialogTitle>
                            <DialogDescription className="text-foreground/70 text-base mt-2">
                                {project.shortDescription}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    My Role / Contribution
                                </h4>
                                <p className="text-foreground text-lg font-medium leading-relaxed">{project.role}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className={cn(
                                            "inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full border shadow-sm cursor-default hover:-translate-y-1 transition-all duration-300",
                                            "bg-secondary text-secondary-foreground border-border/50",
                                            "hover:shadow-md hover:border-border"
                                        )}
                                            style={{ padding: "0.25rem 0.75rem" }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-end gap-4">
                            {project.deployedLink && (
                                <Button
                                    nativeButton={false}
                                    render={<a href={project.deployedLink} target="_blank" rel="noopener noreferrer" />}
                                    className="group relative flex items-center gap-2 rounded-xl px-6 bg-transparent border-2 border-primary text-primary font-bold text-base hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                                    style={{ padding: "0.5rem" }}
                                >
                                    <FaExternalLinkAlt className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                    Site Link
                                </Button>
                            )}
                            
                            {project.link ? (
                                <Button
                                    nativeButton={false}
                                    render={<a href={project.link} target="_blank" rel="noopener noreferrer" />}
                                    className="group relative flex items-center gap-2 rounded-xl px-6 bg-linear-to-r from-primary to-blue-600 text-primary-foreground font-bold text-base shadow-lg hover:shadow-[0_0_25px_rgba(var(--primary),0.5)] hover:scale-105 transition-all duration-300"
                                    style={{ padding: "0.5rem" }}
                                >
                                    {project.link.includes('github') ? <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" /> : <FaExternalLinkAlt className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                                    View Project
                                </Button>
                            ) : (
                                <Button disabled className="group relative flex items-center gap-2 rounded-xl px-6 bg-destructive/80 disabled:opacity-100 text-white font-bold text-base shadow-sm" style={{ padding: "0.5rem" }}>
                                    Private Repository
                                </Button>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};
