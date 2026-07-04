/** Shape of a portfolio project — shared by lib/projects.ts and ProjectCard */

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Tailwind gradient classes for the placeholder thumbnail */
  imageGradient: string;
  techStack: string[];
  githubUrl: string;
}
