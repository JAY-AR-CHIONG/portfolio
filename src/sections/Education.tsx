import { motion } from "motion/react"
import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { education } from "@/data/profile"

export function Education() {
  return (
    <section id="education" className="py-28">
      <Container>
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{item.institution}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-text-faint">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
