import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Skills } from "@/sections/Skills"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Education } from "@/sections/Education"
import { Contact } from "@/sections/Contact"

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }))
      }
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  )
}
