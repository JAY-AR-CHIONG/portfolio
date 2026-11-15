import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "center" | "left"
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-14 max-w-2xl", align === "center" ? "mx-auto text-center" : "", className)}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl text-balance">{title}</h2>
      {description && <p className="mt-4 text-base text-text-muted text-balance">{description}</p>}
    </motion.div>
  )
}
