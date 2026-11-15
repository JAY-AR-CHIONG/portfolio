import { motion } from "motion/react"
import { GraduationCap, Code2, Smartphone, Briefcase } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { profile, highlightCards } from "@/data/profile"

const icons = [GraduationCap, Code2, Smartphone, Briefcase]

export function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionHeading eyebrow="About Me" title="Building software that solves real problems" />

        <div className="grid items-start gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-accent/15 to-accent-2/15">
              <div className="flex h-full items-center justify-center">
                <span className="font-mono text-6xl font-bold text-text/15">JRC</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-2xl border border-border bg-surface p-4 shadow-xl sm:block">
              <p className="text-xs font-medium text-text-muted">Currently based in</p>
              <p className="mt-1 text-sm font-semibold text-text">{profile.location}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-text-muted">{profile.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              My work spans the full stack: Laravel and MySQL on the backend, React and Tailwind CSS on the
              frontend, and Flutter for mobile — plus the database design and system-integration work that
              ties it together. I've built commissioned systems for a trading business and a Philippine Army
              unit, contributed to an internal tool during a software development internship, and worked on
              a university reservation platform and an AI research project.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlightCards.map((card, i) => {
                const Icon = icons[i]
                return (
                  <div
                    key={card.label}
                    className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/40"
                  >
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="mt-3 text-sm font-semibold text-text">{card.label}</p>
                    <p className="mt-1 text-xs text-text-muted">{card.sub}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
