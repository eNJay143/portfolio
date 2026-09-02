"use client";
import { useState, useEffect } from "react";
import NavButton from "./navButton";

const NavBar = () => {
    const [isDark, setIsDark] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const nextIsDark = !isDark;
        setIsDark(nextIsDark);
        if (nextIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    const navLinks = [
        { name: "Home", targetId: "home" },
        { name: "Skills", targetId: "skills" },
        { name: "Projects", targetId: "projects" },
        { name: "Education", targetId: "education" },
        { name: "Achievements", targetId: "achievements" },
        { name: "Contact", targetId: "contact" },
    ];

    const handleScroll = (targetId: string) => {
        if (targetId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const yOffset = -80; // offset for the fixed navbar
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 sticky top-4 mt-4 z-50">
            <nav
                style={{ paddingLeft: "24px", paddingRight: "24px" }}
                className="w-full bg-background/80 backdrop-blur-md border border-border shadow-lg rounded-2xl"
            >
                <div>
                    <div className="flex justify-between items-center h-14.75">
                        {/* Left side - Branding and Links */}
                        <div className="flex items-center h-full">
                            <div className="flex shrink-0 items-center cursor-pointer" onClick={() => handleScroll("home")}>
                                <span className="font-serif font-bold text-lg tracking-wide text-primary">
                                    Norman John Bandibas
                                </span>
                            </div>

                            <span
                                className="text-muted-foreground hidden md:inline font-medium text-2xl"
                                style={{ marginLeft: "24px", marginRight: "14px" }}
                            >
                                /
                            </span>

                            <div
                                className="hidden md:flex gap-1 items-center h-full"
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {navLinks.map((link, index) => (
                                    <NavButton
                                        key={link.name}
                                        name={link.name}
                                        onClick={() => handleScroll(link.targetId)}
                                        isHovered={hoveredIndex === index}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right side - Dark Mode Toggle */}
                        <div className="flex items-center">
                            <button
                                onClick={toggleTheme}
                                className="h-10 w-10 rounded-xl text-primary-foreground bg-primary hover:opacity-90 transition-all cursor-pointer border border-transparent outline-none flex items-center justify-center"
                                aria-label="Toggle Dark Mode"
                            >
                                {isDark ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

