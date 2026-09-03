"use client";

import { useState } from "react";
import { Project } from "./projectsData";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger
                nativeButton={false}
                render={
                    <div className={cn(
                        "group relative flex flex-col justify-start h-full rounded-b-3xl backdrop-blur-xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer",
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
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-foreground/70 border border-border/50">
                                +{project.technologies.length - 3} more
                            </span>
                        )}
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
                <div className="p-8 flex flex-col gap-6">
                    <DialogHeader>
                        <DialogTitle className="text-3xl font-bold font-serif text-foreground/90">{project.title}</DialogTitle>
                        <DialogDescription className="text-foreground/70 text-base mt-2">
                            {project.shortDescription}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-2">My Role / Contribution</h4>
                            <p className="text-foreground/90 leading-relaxed">{project.role}</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/50 mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-full bg-secondary/50 text-foreground border border-border/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-6 border-t border-border/30 flex justify-end">
                        {project.link ? (
                            <Button nativeButton={false} render={<a href={project.link} target="_blank" rel="noopener noreferrer" />} className="rounded-full px-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
                                {project.link.includes('github') ? <FaGithub className="w-4 h-4" /> : <FaExternalLinkAlt className="w-4 h-4" />}
                                View Project
                            </Button>
                        ) : (
                            <Button disabled className="rounded-full px-6">
                                Private Repository
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
