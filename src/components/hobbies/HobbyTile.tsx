import { motion } from "motion/react"
import { Camera, Video as VideoIcon } from "lucide-react"
import type { HobbyItem } from "@/types"

export function HobbyTile({ item, index }: { item: HobbyItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong"
    >
      {item.src ? (
        item.type === "photo" ? (
          <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
        ) : (
          <video src={item.src} className="h-full w-full object-cover" muted loop playsInline />
        )
      ) : (
        <div
          className="absolute inset-0 opacity-90 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `linear-gradient(135deg, ${item.accentFrom}, ${item.accentTo})` }}
        >
          <div
            className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 12px)",
            }}
          />
        </div>
      )}

      {!item.src && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-white">
          {item.type === "photo" ? (
            <Camera className="h-6 w-6 opacity-80" />
          ) : (
            <VideoIcon className="h-6 w-6 opacity-80" />
          )}
          <p className="text-xs font-medium uppercase tracking-wide opacity-90">
            {item.type === "photo" ? "Photo placeholder" : "Video placeholder"}
          </p>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-xs font-medium text-white/90">{item.caption}</p>
      </div>
    </motion.div>
  )
}
