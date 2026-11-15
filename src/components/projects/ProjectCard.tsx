import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/types"
import { ProjectMockup } from "./ProjectMockup"
import { Badge } from "@/components/ui/Badge"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
    >
      <Link to={`/projects/${project.slug}`} className="block aspect-[16/10] overflow-hidden bg-bg-secondary">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
          <ProjectMockup project={project} />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge className="border-accent-soft bg-accent-soft text-accent">{project.roleType}</Badge>
          </div>
          <h3 className="text-lg font-semibold text-text">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.shortDescription}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-md bg-bg-secondary px-2 py-1 text-xs font-medium text-text-muted">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md bg-bg-secondary px-2 py-1 text-xs font-medium text-text-faint">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  )
}
