import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { HobbyTile } from "@/components/hobbies/HobbyTile"
import { hobbies } from "@/data/hobbies"

export function Hobbies() {
  const photos = hobbies.filter((h) => h.type === "photo")
  const videos = hobbies.filter((h) => h.type === "video")

  return (
    <section id="hobbies" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Beyond the Code"
          title="Photography & Videography"
          description="A personal hobby alongside software development — shots and clips will go here once a curated set is ready."
        />

        <div className="mb-10">
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">Photography</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {photos.map((item, i) => (
              <HobbyTile key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">Videography</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {videos.map((item, i) => (
              <HobbyTile key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
