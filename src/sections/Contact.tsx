import { useState, type FormEvent } from "react"
import { motion } from "motion/react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { profile } from "@/data/profile"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" }

function validate(values: FormState) {
  const errors: Partial<FormState> = {}
  if (!values.name.trim()) errors.name = "Please enter your name."
  if (!values.email.trim()) errors.email = "Please enter your email."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address."
  if (!values.subject.trim()) errors.subject = "Please add a subject."
  if (!values.message.trim()) errors.message = "Please write a message."
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<"idle" | "sending" | "opened">("idle")

  function handleChange(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus("sending")
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject
    )}&body=${encodeURIComponent(body)}`

    window.setTimeout(() => {
      window.location.href = mailto
      setStatus("opened")
    }, 400)
  }

  return (
    <section id="contact" className="py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-text-faint">Email</p>
                <p className="text-sm font-medium text-text">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-text-faint">Phone</p>
                <p className="text-sm font-medium text-text">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-text-faint">Location</p>
                <p className="text-sm font-medium text-text">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                value={values.name}
                error={errors.name}
                onChange={(v) => handleChange("name", v)}
              />
              <Field
                label="Email Address"
                type="email"
                value={values.email}
                error={errors.email}
                onChange={(v) => handleChange("email", v)}
              />
            </div>
            <div className="mt-5">
              <Field
                label="Subject"
                value={values.subject}
                error={errors.subject}
                onChange={(v) => handleChange("subject", v)}
              />
            </div>
            <div className="mt-5">
              <label className="mb-1.5 block text-xs font-medium text-text-muted">Message</label>
              <textarea
                value={values.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
                placeholder="Tell me about the role or project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === "sending"}>
              {status === "opened" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Email client opened
                </>
              ) : status === "sending" ? (
                "Preparing message…"
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
            {status === "opened" && (
              <p className="mt-3 text-xs text-text-faint">
                This opened your email app with the message pre-filled — send it from there to reach me.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-bg-secondary px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}
