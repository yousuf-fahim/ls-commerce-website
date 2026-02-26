import { Link } from "react-router-dom"

const legalLinks = [
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[13px] text-zinc-400 transition-colors hover:text-zinc-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-4 text-center text-[13px] text-zinc-400">
          © {new Date().getFullYear()} LS Commerce GmbH – Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
