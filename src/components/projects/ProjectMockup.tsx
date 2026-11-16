import { Code2, ImageOff } from "lucide-react"
import type { Project } from "@/types"
import { cn } from "@/lib/utils"

function GradientBackdrop({ from, to }: { from: string; to: string }) {
  return (
    <div
      className="absolute inset-0 opacity-90"
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 12px)",
        }}
      />
    </div>
  )
}

function PlaceholderNotice({ label }: { label?: string }) {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 p-6 text-center text-white">
      <ImageOff className="h-6 w-6 opacity-80" />
      <p className="text-xs font-medium uppercase tracking-wide opacity-90">
        {label ?? "Screenshot placeholder"}
      </p>
    </div>
  )
}

function Screenshot({ src, label }: { src: string; label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#1c1c22]">
      <img src={src} alt={label ?? "Screenshot"} className="h-full w-full object-contain" />
    </div>
  )
}

export function ProjectMockup({
  project,
  label,
  image,
  className,
}: {
  project: Pick<Project, "mockupType" | "accentFrom" | "accentTo" | "title">
  label?: string
  image?: string
  className?: string
}) {
  const { mockupType, accentFrom, accentTo, title } = project

  if (mockupType === "mobile") {
    return (
      <div className={cn("flex h-full items-center justify-center bg-bg-secondary p-6", className)}>
        <div className="relative aspect-[9/19] h-full max-h-full w-auto overflow-hidden rounded-[1.75rem] border-[6px] border-[#1c1c22] bg-black shadow-2xl">
          <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-[#1c1c22]" />
          <div className="relative h-full w-full overflow-hidden">
            {image ? (
              <Screenshot src={image} label={label} />
            ) : (
              <>
                <GradientBackdrop from={accentFrom} to={accentTo} />
                <PlaceholderNotice label={label} />
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (mockupType === "desktop") {
    return (
      <div className={cn("flex h-full flex-col overflow-hidden rounded-xl border border-border-strong bg-[#1c1c22] shadow-xl", className)}>
        <div className="flex items-center gap-1.5 border-b border-black/20 bg-[#262630] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex items-center gap-1 text-[11px] text-white/50">
            <Code2 className="h-3 w-3" /> {title}.exe
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          {image ? (
            <Screenshot src={image} label={label} />
          ) : (
            <>
              <GradientBackdrop from={accentFrom} to={accentTo} />
              <PlaceholderNotice label={label} />
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex h-full flex-col overflow-hidden rounded-xl border border-border-strong bg-[#1c1c22] shadow-xl", className)}>
      <div className="flex items-center gap-2 border-b border-black/20 bg-[#262630] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 truncate rounded-md bg-black/25 px-3 py-1 text-[11px] text-white/50">
          app.local/{title.toLowerCase().replace(/\s+/g, "-")}
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden">
        {image ? (
          <Screenshot src={image} label={label} />
        ) : (
          <>
            <GradientBackdrop from={accentFrom} to={accentTo} />
            <PlaceholderNotice label={label} />
          </>
        )}
      </div>
    </div>
  )
}
