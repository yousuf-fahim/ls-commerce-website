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
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1100px] items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative text-[14px] font-normal transition-colors ${
                activeSection === link.id
                  ? "text-zinc-900"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#f97627] transition-all duration-300 ${
                  activeSection === link.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`block w-full py-2 text-left text-[14px] ${
                activeSection === link.id
                  ? "font-medium text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
