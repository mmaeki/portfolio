import type { Project } from "@/lib/types/project";

/**
 * Placeholder project data — edit this file to add your real projects.
 * Images use CSS gradients until you add screenshots to /public/projects/.
 */
export const projects: Project[] = [
  {
    id: "task-flow",
    title: "TaskFlow",
    description:
      "A kanban-style task manager with drag-and-drop boards, dark mode, and local persistence.",
    imageGradient: "from-primary to-sage",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "dnd-kit"],
    githubUrl: "https://github.com/yourusername/taskflow", // TODO
    liveUrl: "https://taskflow-demo.vercel.app", // TODO
  },
  {
    id: "weather-lens",
    title: "Weather Lens",
    description:
      "Minimal weather dashboard with geolocation, 7-day forecasts, and animated condition icons.",
    imageGradient: "from-accent to-primary-light",
    techStack: ["React", "OpenWeather API", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/weather-lens", // TODO
    liveUrl: "https://weather-lens.vercel.app", // TODO
  },
  {
    id: "dev-notes",
    title: "Dev Notes",
    description:
      "Markdown note-taking app with syntax highlighting, tag filtering, and full-text search.",
    imageGradient: "from-sage to-accent-light",
    techStack: ["Next.js", "MDX", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/dev-notes", // TODO
    liveUrl: "https://dev-notes.vercel.app", // TODO
  },
];
