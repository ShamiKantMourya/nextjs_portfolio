import { Project } from "../types/project.types";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include product filtering, user authentication, cart functionality, and payment processing.",
    image: "/images/projects/project1.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
    featured: true,
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects. Includes features like drag and drop, task categorization, deadline reminders, and team collaboration.",
    image: "/images/projects/project2.jpg",
    technologies: ["React", "Redux", "Firebase", "Material UI", "TypeScript"],
    githubUrl: "https://github.com/username/task-management-app",
    liveUrl: "https://task-app-demo.vercel.app",
    featured: true,
  },
  {
    id: "project3",
    title: "Weather Dashboard",
    description:
      "A weather application that provides current weather data and forecasts for locations worldwide. Uses OpenWeatherMap API and features interactive maps.",
    image: "/images/projects/project3.jpg",
    technologies: ["React", "OpenWeatherMap API", "Leaflet", "CSS Modules"],
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dash-demo.vercel.app",
    featured: false,
  },
];
