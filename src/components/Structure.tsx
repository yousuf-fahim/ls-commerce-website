import { FadeIn } from "@/components/FadeIn"

const items = [
  "Schweizer Gesellschaft mit Sitz in Rorschacherberg",
  "Operativer Schwerpunkt auf digitalen Eigenprojekten",
  "Kleine zentrale Leitung, verteilte technische Ressourcen",
  "Internationale Lieferketten und digitale Infrastruktur",
]

export function Structure() {
  return (
    <section id="struktur" className="border-t border-zinc-100 px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <FadeIn>
          <h2 className="mb-8 text-[13px] font-medium tracking-widest uppercase text-[#f97627]">
            Struktur
          </h2>
        </FadeIn>
        <ul className="max-w-[720px] space-y-4">
          {items.map((item, i) => (
            <FadeIn key={item} delay={0.1 + i * 0.08}>
              <li className="flex items-start gap-3 text-[16px] leading-relaxed text-zinc-600">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-orange-400" />
                {item}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
