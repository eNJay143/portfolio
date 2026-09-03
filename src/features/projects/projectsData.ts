export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  results: string;
  link?: string;
  coverImage?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Project Alpha",
    shortDescription: "A full-stack web application designed to streamline internal company workflows.",
    role: "Lead Full-Stack Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    results: "Improved workflow efficiency by 40% and successfully deployed to over 500 active users.",
    link: "https://github.com/yourusername/project-alpha",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-2",
    title: "Data Insights Platform",
    shortDescription: "A dashboard for visualizing real-time analytics and user engagement metrics.",
    role: "Frontend Engineer",
    technologies: ["React", "Chart.js", "Tailwind CSS", "Firebase"],
    results: "Provided actionable insights that led to a 15% increase in user retention.",
    link: "https://github.com/yourusername/data-insights",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-3",
    title: "E-Commerce Mobile App",
    shortDescription: "A cross-platform mobile app for an online retail store with a seamless checkout experience.",
    role: "Mobile App Developer",
    technologies: ["React Native", "Expo", "Redux", "Stripe API"],
    results: "Generated $50k in revenue within the first three months of launch.",
    link: "https://github.com/yourusername/ecommerce-app",
    coverImage: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project-4",
    title: "Automated Testing Framework",
    shortDescription: "A scalable testing suite built to automate end-to-end testing for multiple microservices.",
    role: "QA Automation Engineer",
    technologies: ["Python", "Selenium", "Docker", "Jenkins"],
    results: "Reduced QA testing time by 60% and caught critical bugs before production.",
    link: "https://github.com/yourusername/auto-test-framework",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];
