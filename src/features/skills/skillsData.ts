import { IconType } from "react-icons";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
    SiNodedotjs, SiMysql, SiSupabase, SiFlask,
    SiJavascript, SiPython, SiC, SiCplusplus, SiPhp,
    SiGit, SiGithub, SiDocker, SiVercel, SiFigma, SiGnubash
} from "react-icons/si";
import { FaJava, FaDesktop, FaServer, FaCode, FaTools } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export type SkillItem = {
    name: string;
    icon?: IconType;
};

export type SkillCategory = {
    title: string;
    icon?: IconType;
    skills: SkillItem[];
};

export const skillsData: SkillCategory[] = [
    {
        title: "Frontend Development",
        icon: FaDesktop,
        skills: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: SiCss },
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ]
    },
    {
        title: "Backend Development",
        icon: FaServer,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "MySQL", icon: SiMysql },
            { name: "Supabase", icon: SiSupabase },
            { name: "Flask", icon: SiFlask },
        ]
    },
    {
        title: "Programming Languages",
        icon: FaCode,
        skills: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "Java", icon: FaJava },
            { name: "C", icon: SiC },
            { name: "C++", icon: SiCplusplus },
            { name: "C#", icon: TbBrandCSharp },
            { name: "PHP", icon: SiPhp },
        ]
    },
    {
        title: "Tools & Others",
        icon: FaTools,
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Docker", icon: SiDocker },
            { name: "Bash / Shell", icon: SiGnubash },
            { name: "Figma", icon: SiFigma },
            { name: "Vercel", icon: SiVercel },
        ]
    }
];
