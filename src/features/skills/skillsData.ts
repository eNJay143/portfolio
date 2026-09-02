import { IconType } from "react-icons";
import { 
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5,
    SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiJavascript, SiCplusplus,
    SiFigma, SiVercel 
} from "react-icons/si";
import { FaGitAlt, FaDatabase, FaJava } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

export type SkillItem = {
    name: string;
    icon?: IconType;
};

export type SkillCategory = {
    title: string;
    skills: SkillItem[];
};

export const skillsData: SkillCategory[] = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "HTML5 / CSS3", icon: SiHtml5 },
        ]
    },
    {
        title: "Backend Development",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "Python", icon: SiPython },
            { name: "SQL", icon: FaDatabase },
            { name: "PostgreSQL", icon: SiPostgresql },
        ]
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: SiPython },
            { name: "Java", icon: FaJava },
            { name: "C++", icon: SiCplusplus },
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git & GitHub", icon: FaGitAlt },
            { name: "Figma", icon: SiFigma },
            { name: "Vercel", icon: SiVercel },
            { name: "Responsive Design", icon: MdDevices },
        ]
    }
];
