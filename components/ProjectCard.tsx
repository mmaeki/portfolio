"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types/project";
import { fadeInUp, scrollRevealViewport } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  /** Stagger index for scroll reveal delay */
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex flex-col overflow-hidden rounded-card border border-surface-muted bg-surface-elevated shadow-card transition-shadow duration-300 hover:shadow-card-hover"
    >
      {/* Placeholder thumbnail — swap for <Image> when you have screenshots */}
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${project.imageGradient}`}
        aria-hidden
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <span className="font-heading text-4xl font-bold text-white">
            {project.title.charAt(0)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold text-primary">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            GitHub →
          </Link>
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            Live demo →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
