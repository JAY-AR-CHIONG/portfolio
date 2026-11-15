import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { BackToTop } from "@/components/layout/BackToTop"
import { PageFallback } from "@/components/ui/PageFallback"
import { Home } from "@/pages/Home"

const ProjectDetails = lazy(() =>
  import("@/pages/ProjectDetails").then((m) => ({ default: m.ProjectDetails }))
)
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })))

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  )
}
