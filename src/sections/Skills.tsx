import { motion } from "motion/react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { skillCategories } from "@/data/profile"

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Organized by the real stacks I've shipped projects with — no invented proficiency scores, just the tools."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{cat.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm text-text transition-colors group-hover:border-border-strong"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
