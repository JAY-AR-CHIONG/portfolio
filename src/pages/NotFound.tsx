import { motion } from "motion/react"
import { Home } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { ButtonLink } from "@/components/ui/Button"

export function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center py-28">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-7xl font-extrabold gradient-text sm:text-8xl">404</span>
          <h1 className="mt-6 text-2xl font-bold text-text sm:text-3xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-text-muted">
            The page you're looking for doesn't exist or may have moved.
          </p>
          <ButtonLink href="/" size="lg" className="mt-8">
            <Home className="h-4 w-4" />
            Back to Home
          </ButtonLink>
        </motion.div>
      </Container>
    </section>
  )
}
