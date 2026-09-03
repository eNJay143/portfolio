import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";

export interface ContactItem {
    id: string;
    title: string;
    value: string;
    link: string;
    icon: IconType;
}

export const contactData: ContactItem[] = [
    {
        id: "email",
        title: "Email",
        value: "normannj2018@gmail.com",
        link: "mailto:normannj2018@gmail.com",
        icon: FaEnvelope,
    },
    {
        id: "github",
        title: "GitHub",
        value: "github.com/eNJay143",
        link: "https://github.com/eNJay143",
        icon: FaGithub,
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        value: "linkedin.com/in/norman-john-bandibas",
        link: "https://www.linkedin.com/in/norman-john-bandibas/",
        icon: FaLinkedin,
    }
];
