import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, Moon, Sun, FileDown, Eye } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { useTheme } from "@/hooks/useTheme"
import { useActiveSection } from "@/hooks/useActiveSection"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Hobbies", id: "hobbies" },
  { label: "Contact", id: "contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === "/"
  const active = useActiveSection(isHome ? navItems.map((n) => n.id) : [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  function goToSection(id: string) {
    setMobileOpen(false)
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/#" + id)
    }
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border py-3" : "border-b border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <button
          onClick={() => goToSection("home")}
          className="font-mono text-lg font-bold tracking-tight text-text"
        >
          JAY-AR<span className="text-accent">{" >_<"}</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => goToSection(item.id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === item.id && isHome ? "text-text" : "text-text-muted hover:text-text"
              )}
            >
              {item.label}
              {active === item.id && isHome && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            aria-label="Preview resume"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Eye className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            <FileDown className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-muted"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden glass border-b border-border lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goToSection(item.id)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                    active === item.id && isHome ? "bg-surface text-text" : "text-text-muted hover:bg-surface"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 flex gap-2">
                <a
                  href={profile.resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-text"
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </a>
                <a
                  href={profile.resumeFile}
                  download
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-text"
                >
                  <FileDown className="h-4 w-4" />
                  Download
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
