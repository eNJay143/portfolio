import { projectsData } from "./projectsData";
import { ProjectCard } from "./ProjectCard";
import FoldText from "@/components/FoldText";

export const ProjectsSection = () => {
    return (
        <section id="projects" className="flex flex-col items-center justify-start pb-24 relative" style={{ paddingTop: '10vh' }}>
            <div className="w-full max-w-5xl flex flex-col items-start gap-12 px-4">

                {/* Section Header */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground/90">
                        <FoldText
                            text="Featured Projects"
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
                            text="A selection of my recent work, highlighting my ability to build scalable applications and solve complex problems."
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

                {/* 2x2 Grid Layout */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 overflow-hidden">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>

            {/* Background glowing effects */}
            <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
        </section>
    );
};
