import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { projectCategoryLabels } from "@/data/projects"

const filterOrder = ["all", "full-stack", "web", "mobile", "commissioned", "internship", "academic"]

export function ProjectFilters({
  active,
  onChange,
}: {
  active: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {filterOrder.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === key ? "text-white" : "text-text-muted hover:text-text"
          )}
        >
          {active === key && (
            <motion.span
              layoutId="filter-active"
              className="absolute inset-0 rounded-full bg-accent"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{projectCategoryLabels[key]}</span>
        </button>
      ))}
    </div>
  )
}
