export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  link?: string;
  outputImage?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Save and Savor",
    shortDescription: "A personal food inventory system designed to help users efficiently manage their food supplies.",
    role: "Assistant Developer",
    technologies: ["C#", "Guna UI", "MySQL", "Tailwind CSS"],
    outputImage: "./saveandsavor.png",
    link: "https://github.com/rhuelski/Food-Inventory-System",
  },
  {
    id: "project-2",
    title: "Storya Viscans",
    shortDescription: "A community-driven platform for Viscans to share stories, engage in social discussions, and access academic resources.",
    role: "Backend Developer",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase"],
    link: "https://github.com/Kikypochiki/Storya-Viscans",
    outputImage: "./storyaviscans.png"
  },
  {
    id: "project-3",
    title: "DormPay",
    shortDescription: "A web application designed to streamline dormitory financial transactions, enhance operational efficiency, and strengthen transparency.",
    role: "Backend Developer",
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "TypeScript", "Supabase",],
    link: "https://github.com/UISB-Dev-Team/everest-v2",
    outputImage: "./dormpay.png"
  },
  {
    id: "project-4",
    title: "Veris",
    shortDescription: "A web appliaction that unifies membership tracking, event clearance, and student engagement tools into a single system — built for student organizations tired of running everything through spreadsheets and group chats..",
    role: "Backend Developer",
    technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "TypeScript", "Supabase", "Firebase"],
    link: "https://github.com/Atlas-VSU",
    outputImage: "./veris.png "
  }
];
