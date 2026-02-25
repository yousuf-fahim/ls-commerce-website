import { FadeIn } from "@/components/FadeIn"

export function About() {
  return (
    <section id="ueber-uns" className="px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <FadeIn>
          <h2 className="mb-8 text-[13px] font-medium tracking-widest uppercase text-[#f97627]">
            Über uns
          </h2>
        </FadeIn>
        <div className="max-w-[720px] space-y-5 text-[16px] leading-relaxed font-normal text-zinc-600">
          <FadeIn delay={0.1}>
            <p>
              LS Commerce GmbH ist ein unabhängiges Schweizer Unternehmen im
              Bereich digitale Produkte, Softwareentwicklung und Onlinehandel.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Wir konzipieren, entwickeln und betreiben eigene digitale
              Plattformen und technologiegestützte Produkte für internationale
              Märkte.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p>
              Unser Fokus liegt auf stabilen Prozessen, klaren Strukturen und
              nachhaltigen digitalen Geschäftsmodellen.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
