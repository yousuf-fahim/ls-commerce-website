import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/Logo"

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Tätigkeitsfelder", href: "#taetigkeitsfelder" },
  { label: "Struktur", href: "#struktur" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-[14px] font-normal text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {link.label}
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
              className="block w-full py-2 text-left text-[14px] text-zinc-600 hover:text-zinc-900"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
