import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { ProjectFilters } from "@/components/projects/ProjectFilters"
import { projects } from "@/data/projects"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const filtered = useMemo(() => {
    if (filter === "all") return projects
    return projects.filter((p) => p.categories.includes(filter as never))
  }, [filter])

  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Systems I've actually built"
          description="Commissioned business systems, internship work, and academic projects — each with real features, not placeholder descriptions."
        />

        <div className="mb-12">
          <ProjectFilters active={filter} onChange={setFilter} />
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}
