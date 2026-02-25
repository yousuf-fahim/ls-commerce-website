import type { ReactNode } from "react"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Logo } from "@/components/Logo"

interface LegalLayoutProps {
  title: string
  children: ReactNode
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[13px] text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Zurück
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 py-20">
        <h1 className="mb-12 text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-tight text-zinc-900">
          {title}
        </h1>
        <div className="prose-legal max-w-[720px] space-y-6 text-[15px] leading-relaxed text-zinc-600 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-[13px] [&_h2]:font-medium [&_h2]:tracking-widest [&_h2]:uppercase [&_h2]:text-[#f97627] [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-[15px] [&_h3]:font-medium [&_h3]:text-zinc-900 [&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:mt-2 [&_li]:before:block [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:shrink-0 [&_li]:before:bg-orange-400 [&_li]:before:content-[''] [&_a]:text-orange-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-orange-500">
          {children}
        </div>
      </main>

      <footer className="border-t border-zinc-100 px-6 py-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[13px] text-zinc-400">
            © {new Date().getFullYear()} LS Commerce GmbH – Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
