import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/Logo"
import { useScrollState } from "@/hooks/useScrollState"

const navLinks = [
  { label: "Über uns", href: "#ueber-uns", id: "ueber-uns" },
  { label: "Tätigkeitsfelder", href: "#taetigkeitsfelder", id: "taetigkeitsfelder" },
  { label: "Struktur", href: "#struktur", id: "struktur" },
  { label: "Kontakt", href: "#kontakt", id: "kontakt" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled, activeSection } = useScrollState()

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/95 shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
          : "border-b border-white/[0.06] bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1100px] items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Logo dark={!scrolled} />

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                  scrolled
                    ? isActive
                      ? "text-zinc-900"
                      : "text-zinc-400 hover:text-zinc-700"
                    : isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {/* Active background pill */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "bg-zinc-100"
                        : "bg-white/[0.08]"
                      : "bg-transparent"
                  }`}
                />
                <span className="relative">{link.label}</span>
              </button>
            )
          })}

          {/* CTA button in nav */}
          <button
            onClick={() =>
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }
            className={`ml-4 px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
              scrolled
                ? "bg-orange-600 text-white hover:bg-orange-500"
                : "bg-orange-600 text-white hover:bg-orange-500"
            }`}
          >
            Kontakt
          </button>
        </nav>

        <button
          className={`transition-colors duration-300 md:hidden ${scrolled ? "text-zinc-900" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu — always solid for readability */}
      {mobileOpen && (
        <nav className="border-t border-zinc-100 bg-white px-6 py-3 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-[14px] transition-colors ${
                activeSection === link.id
                  ? "bg-zinc-50 font-medium text-zinc-900"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="mt-2 w-full bg-orange-600 px-3 py-2.5 text-center text-[14px] font-medium text-white hover:bg-orange-500"
          >
            Kontakt
          </button>
        </nav>
      )}
    </header>
  )
}
