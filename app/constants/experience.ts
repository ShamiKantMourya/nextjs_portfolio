import { Experience } from "../types/experience.types";

export const experiences: Experience[] = [
  {
    id: "job1",
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    startDate: "January 2022",
    endDate: "Present",
    description: [
      "Led a team of 5 developers in building a modern SaaS platform using Next.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Architected and developed reusable component library used across multiple products",
      "Mentored junior developers and conducted code reviews to ensure quality standards",
    ],
    technologies: ["Next.js", "TypeScript", "GraphQL", "Jest", "Tailwind CSS"],
  },
  {
    id: "job2",
    company: "Digital Solutions Ltd.",
    position: "Frontend Developer",
    startDate: "March 2020",
    endDate: "December 2021",
    description: [
      "Developed responsive web applications for clients in finance and healthcare sectors",
      "Optimized application performance resulting in 30% faster load times",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Implemented state management solutions using Redux and Context API",
    ],
    technologies: ["React", "JavaScript", "Redux", "CSS/SCSS", "REST APIs"],
  },
];
