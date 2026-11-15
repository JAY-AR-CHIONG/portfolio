import { motion } from "motion/react"
import { MapPin, Calendar } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionHeading eyebrow="Experience" title="Where I've worked and built" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2" />

          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 sm:pl-0"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg sm:left-1/2 sm:-translate-x-1/2" />

                <div
                  className={
                    "sm:grid sm:grid-cols-2 sm:gap-10 " + (i % 2 === 1 ? "" : "")
                  }
                >
                  <div className={i % 2 === 0 ? "sm:text-right sm:pr-10" : "sm:col-start-2 sm:pl-10"}>
                    <div className="rounded-2xl border border-border bg-surface p-6 text-left">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-text-faint">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-text">{item.role}</h3>
                      <p className="text-sm font-medium text-accent">{item.organization}</p>
                      <div className="mt-1 flex items-center gap-1.5 text-xs text-text-faint">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </div>

                      <ul className="mt-4 space-y-2">
                        {item.description.map((line, idx) => (
                          <li key={idx} className="text-sm leading-relaxed text-text-muted">
                            {line}
                          </li>
                        ))}
                      </ul>

                      {item.technologies.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-bg-secondary px-2 py-1 text-xs font-medium text-text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
