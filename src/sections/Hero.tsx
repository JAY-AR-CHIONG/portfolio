import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { ArrowDown, FileDown, Mail } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { ButtonLink } from "@/components/ui/Button"
import { profile } from "@/data/profile"

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)))
        },
        deleting ? speed / 2 : speed
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, pause])

  return text
}

export function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-accent-2/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <Container className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to Full-Stack & Software Developer roles
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl text-balance">
            {profile.name}
          </h1>

          <div className="mt-4 h-9 text-xl font-semibold text-text-muted sm:text-2xl">
            <span className="gradient-text">{typed}</span>
            <span className="animate-pulse text-accent">|</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg text-balance">
            Computer Science graduate and software developer passionate about building modern web
            applications, practical business systems, and efficient digital solutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#projects"
              size="lg"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View My Projects
              <ArrowDown className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={profile.resumeFile} download variant="secondary" size="lg">
              <FileDown className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="ghost"
              size="lg"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 animate-glow rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-2 opacity-30 blur-2xl" />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-border-strong bg-surface shadow-2xl">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 to-accent-2/15">
              <span className="font-mono text-7xl font-bold text-text/20">JRC</span>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface font-mono text-xs font-semibold text-accent shadow-lg"
          >
            PHP
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 top-1/3 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface font-mono text-xs font-semibold text-accent-2 shadow-lg"
          >
            React
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 left-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface font-mono text-xs font-semibold text-cyan shadow-lg"
          >
            Flutter
          </motion.div>
        </motion.div>
      </Container>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-faint transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  )
}
