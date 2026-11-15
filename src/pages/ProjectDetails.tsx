import { useEffect, type ReactNode } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Badge } from "@/components/ui/Badge"
import { ProjectGallery } from "@/components/projects/ProjectGallery"
import { getProjectBySlug, projects } from "@/data/projects"

export function ProjectDetails() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug ?? "")

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) return <Navigate to="/404" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

  return (
    <article className="py-28">
      <Container>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-accent-soft bg-accent-soft text-accent">{project.roleType}</Badge>
            <Badge>{project.status}</Badge>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">{project.shortDescription}</p>

          <div className="mt-5 flex flex-wrap gap-5 text-sm text-text-faint">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {project.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {project.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <ProjectGallery project={project} />
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="flex flex-col gap-12">
            <Block title="Project Overview">
              <p className="text-base leading-relaxed text-text-muted">{project.overview}</p>
            </Block>

            <Block title="My Role">
              <p className="mb-4 text-sm font-medium text-accent">
                {project.role} — {project.roleType}
              </p>
              <ul className="space-y-2.5">
                {project.myContribution.map((line, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Features & Functionality">
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <div key={feature.title} className="rounded-xl border border-border bg-surface p-4">
                    <h3 className="text-sm font-semibold text-text">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            </Block>

            {project.developmentProcess && (
              <Block title="Development Process">
                <p className="text-sm leading-relaxed text-text-muted">{project.developmentProcess}</p>
              </Block>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <Block title="Challenges & Solutions">
                <div className="flex flex-col gap-4">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="rounded-xl border border-border bg-surface p-4">
                      <p className="text-sm font-semibold text-text">{c.challenge}</p>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">{c.solution}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-text-faint">Technologies Used</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-text-faint">Project Links</h3>
                <div className="mt-4 flex flex-col gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl border border-dashed border-border p-6 text-sm text-text-faint">
              Private client/internal system — public demo and repository links are not available for this
              project out of respect for client and organizational confidentiality.
            </div>
          </aside>
        </div>

        <nav className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <span className="flex items-center gap-1.5 text-xs text-text-faint">
              <ArrowLeft className="h-3.5 w-3.5" /> Previous Project
            </span>
            <p className="mt-2 font-medium text-text group-hover:text-accent">{prevProject.title}</p>
          </Link>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 text-right transition-colors hover:border-accent/40"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs text-text-faint">
              Next Project <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <p className="mt-2 font-medium text-text group-hover:text-accent">{nextProject.title}</p>
          </Link>
        </nav>
      </Container>
    </article>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-text">{title}</h2>
      {children}
    </div>
  )
}
