import { Mail, Phone, Link2 } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { profile } from "@/data/profile"

const iconMap = {
  mail: Mail,
  phone: Phone,
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <Container className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-text">{profile.name}</p>
          <p className="mt-1 text-sm text-text-muted">
            {profile.title} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.social.map((link) => {
            const Icon = iconMap[link.icon]
            return (
              <a
                key={link.label}
                href={link.url}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          })}
          <span
            title={`Facebook: ${profile.facebookName}`}
            aria-label={`Facebook: ${profile.facebookName}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted"
          >
            <Link2 className="h-4 w-4" />
          </span>
        </div>

        <p className="text-xs text-text-faint">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
