import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected front-end projects and experiments.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-content px-6 py-section">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="A selection of apps and experiments. Edit lib/projects.ts to add your own."
        centered
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
