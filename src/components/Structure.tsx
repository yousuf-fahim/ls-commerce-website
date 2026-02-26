import { FadeIn } from "@/components/FadeIn"

const items = [
  "Schweizer Gesellschaft mit Sitz in Rorschacherberg",
  "Operativer Schwerpunkt auf digitalen Eigenprojekten",
  "Zentrale Leitung, verteilte technische Ressourcen",
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
        <ul className="max-w-[720px] space-y-3">
          {items.map((item, i) => (
            <FadeIn key={item} delay={0.1 + i * 0.08}>
              <li className="border-l-2 border-orange-400 pl-4 text-[16px] leading-relaxed text-zinc-600">
                {item}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
