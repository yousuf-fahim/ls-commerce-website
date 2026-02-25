import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Code, Package } from "lucide-react"
import { FadeIn } from "@/components/FadeIn"

const services = [
  {
    icon: Globe,
    title: "Digitale Plattformen",
    description:
      "Wir betreiben eigene Onlineplattformen in verschiedenen digitalen Segmenten.",
  },
  {
    icon: Code,
    title: "Software und Anwendungen",
    description:
      "Entwicklung von webbasierten Anwendungen, internen Tools und digitalen Lösungen.",
  },
  {
    icon: Package,
    title: "Produktentwicklung und Handel",
    description:
      "Konzeption, Aufbau und internationaler Vertrieb eigener Produkte.",
  },
]

export function Services() {
  return (
    <section id="taetigkeitsfelder" className="border-t border-zinc-100 px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <FadeIn>
          <h2 className="mb-12 text-[13px] font-medium tracking-widest uppercase text-[#f97627]">
            Tätigkeitsfelder
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 + i * 0.1}>
              <Card className="h-full rounded-none border border-zinc-200 bg-white shadow-none transition-colors hover:border-orange-200">
                <CardHeader className="pb-3">
                  <service.icon className="mb-3 h-5 w-5 text-orange-500" strokeWidth={1.5} />
                  <CardTitle className="text-[15px] font-medium text-zinc-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[14px] leading-relaxed text-zinc-500">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
