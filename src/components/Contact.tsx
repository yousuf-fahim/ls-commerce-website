import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"
import { motion, AnimatePresence } from "framer-motion"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    console.log("Kontaktformular:", data)
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="border-t border-zinc-100 px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <FadeIn>
          <h2 className="mb-12 text-[13px] font-medium tracking-widest uppercase text-[#f97627]">
            Kontakt
          </h2>
        </FadeIn>

        <div className="grid gap-16 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div>
              <address className="space-y-1 text-[16px] not-italic leading-relaxed text-zinc-600">
                <p className="font-medium text-zinc-900">LS Commerce GmbH</p>
                <p>Rosengartenstrasse 10</p>
                <p>9404 Rorschacherberg</p>
                <p>Schweiz</p>
              </address>

              <a
                href="mailto:info@ls-commerce.ch"
                className="mt-6 inline-flex items-center gap-2 text-[14px] text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                info@ls-commerce.ch
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center border border-zinc-100 bg-zinc-50 px-8 py-12 text-center"
                >
                  <CheckCircle className="mb-4 h-8 w-8 text-orange-500" strokeWidth={1.5} />
                  <p className="text-[16px] font-medium text-zinc-900">
                    Nachricht gesendet
                  </p>
                  <p className="mt-2 max-w-[300px] text-[14px] text-zinc-500">
                    Vielen Dank für Ihre Anfrage. Wir melden uns in Kürze bei Ihnen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[13px] text-zinc-400 transition-colors hover:text-zinc-600"
                  >
                    Weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[13px] text-zinc-500">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="rounded-none border-zinc-200 transition-colors focus:border-orange-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[13px] text-zinc-500">
                      E-Mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-none border-zinc-200 transition-colors focus:border-orange-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[13px] text-zinc-500">
                      Nachricht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="rounded-none border-zinc-200 transition-colors focus:border-orange-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="rounded-none bg-orange-600 px-8 text-[13px] font-medium tracking-wide text-white hover:bg-orange-500"
                  >
                    Absenden
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
