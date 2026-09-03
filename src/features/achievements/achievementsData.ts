import { IconType } from "react-icons";
import { FaTrophy, FaGraduationCap, FaCertificate } from "react-icons/fa";

export interface Certificate {
    name: string;
    pdfLink?: string;
}

export interface AchievementCategory {
    id: string;
    title: string;
    icon: IconType;
    items: string[] | Certificate[];
}

export const achievementsData: AchievementCategory[] = [
    {
        id: "comp-awards",
        title: "Competitions and Awards",
        icon: FaTrophy,
        items: [
            "Champion – CS Week 2025 Hackathon",
            "1st Runner Up – RSCENE 2025 Code It Programming Challenge",
            "START Datathon – Top 6 Finalists Nationwide",
            "TIMO/BBB/PHIMO/HKIMO – Silver - Gold"
        ]
    },
    {
        id: "scholarships",
        title: "Scholarships",
        icon: FaGraduationCap,
        items: [
            "2024 DOST-SEI Undergraduate Scholarship",
            "START x DOST DataCamp Scholar"
        ]
    },
    {
        id: "certs",
        title: "Certificates and Accomplishments",
        icon: FaCertificate,
        items: [
            { name: "Cisco Introduction to Data Science", pdfLink: "/certificates/CiscoIntroductionToDataScienceCertificate.pdf" },
            { name: "Understanding Data Science", pdfLink: "/certificates/DataCampUnderstaningDataScienceAccomplishment.pdf" },
            { name: "Understanding Data Visualization", pdfLink: "/certificates/DataCampUnderstaningDataVisualizationAccomplishment.pdf" },
            { name: "Understanding Data Engineering", pdfLink: "/certificates/DataCampUnderstaningDataEngineeringAccomplishment.pdf" },
            { name: "Understanding Machine Learning", pdfLink: "/certificates/DataCampUnderstaningMachineLearningAccomplishment.pdf" },
            { name: "Understanding Cloud Computing", pdfLink: "/certificates/DataCampUnderstaningCloudComputingAccomplishment.pdf" },
            { name: "Introduction to Git", pdfLink: "/certificates/introduction-to-git.pdf" },
            { name: "Intermediate Git", pdfLink: "/certificates/intermediate-git.pdf" },
            { name: "Introduction to GitHub Concepts", pdfLink: "/certificates/introduction-to-github-concepts.pdf" },
            { name: "Intermediate GitHub Concepts", pdfLink: "/certificates/intermediate-github-concepts.pdf" },
            { name: "Introduction to SQL", pdfLink: "/certificates/introduction-to-sql.pdf" }
        ]
    }
];
