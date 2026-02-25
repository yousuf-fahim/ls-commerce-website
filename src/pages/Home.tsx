import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Structure } from "@/components/Structure"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Structure />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
