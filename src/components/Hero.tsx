import { motion } from "framer-motion"
import { Globe, Layers, ArrowRight } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"

const ease = [0.21, 0.47, 0.32, 0.98] as const

function NetworkGrid() {
  const nodes = [
    { cx: 120, cy: 80, r: 3 },
    { cx: 280, cy: 50, r: 2.5 },
    { cx: 420, cy: 90, r: 3.5 },
    { cx: 560, cy: 60, r: 2 },
    { cx: 180, cy: 180, r: 2 },
    { cx: 340, cy: 160, r: 4 },
    { cx: 500, cy: 170, r: 2.5 },
    { cx: 220, cy: 260, r: 3 },
    { cx: 440, cy: 250, r: 2 },
    { cx: 600, cy: 240, r: 3 },
    { cx: 80, cy: 200, r: 2 },
    { cx: 650, cy: 140, r: 2.5 },
  ]

  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [0, 4], [4, 5],
    [5, 6], [5, 2], [4, 7], [7, 8], [8, 9],
    [6, 9], [6, 3], [10, 0], [10, 4], [11, 3],
    [11, 9], [7, 5], [8, 6], [1, 5],
  ]

  return (
    <svg
      viewBox="0 0 720 320"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {edges.map(([from, to], i) => (
        <motion.line
          key={`edge-${i}`}
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="#f97627"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, strokeOpacity: [0.2, 0.45, 0.2] }}
          transition={{
            pathLength: { duration: 1.2, delay: 0.4 + i * 0.05, ease },
            strokeOpacity: { duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: 1.5 + i * 0.15 },
          }}
        />
      ))}
      {nodes.map((node, i) => {
        const dx = (i % 3 === 0 ? 6 : i % 3 === 1 ? -5 : 4)
        const dy = (i % 2 === 0 ? -5 : 6)
        return (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#f97627"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.6, 0.9, 0.6],
              scale: 1,
              cx: [node.cx, node.cx + dx, node.cx - dx * 0.5, node.cx],
              cy: [node.cy, node.cy + dy, node.cy - dy * 0.5, node.cy],
            }}
            transition={{
              opacity: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
              scale: { duration: 0.5, delay: 0.3 + i * 0.06, ease },
              cx: { duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
              cy: { duration: 7 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 },
            }}
          />
        )
      })}
      {[nodes[2], nodes[5], nodes[9]].map((node, i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r + 8}
          fill="none"
          stroke="#f97627"
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.5, 2] }}
          transition={{
            duration: 3,
            delay: 1.5 + i * 0.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  )
}

function AnimatedStat({
  value,
  suffix,
  label,
  delay,
  countTo,
}: {
  value: string
  suffix?: string
  label: string
  delay: number
  countTo?: number
}) {
  const { count, ref } = useCountUp(countTo ?? 0, 1400, (delay + 0.6) * 1000)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      className="text-center"
    >
      <div className="text-[28px] font-semibold tracking-tight text-white" translate="no">
        <span className="notranslate">{countTo !== undefined ? count : value}</span>
        {suffix && <span className="notranslate text-orange-400">{suffix}</span>}
      </div>
      <div className="mt-1 text-[12px] font-normal tracking-wide text-zinc-500">{label}</div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-zinc-950">
      <div className="px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Grid background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-orange-600 opacity-[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-orange-500 opacity-[0.05] blur-[100px]" />

        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Left: text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.15] tracking-tight text-white"
              >
                Digitale Lösungen.
                <br />
                Plattformen. Produkte.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
                className="mt-5 max-w-[480px] text-[16px] leading-relaxed text-zinc-400"
              >
                LS Commerce GmbH entwickelt und betreibt eigene
                Onlineplattformen, Softwarelösungen und technologiegetriebene
                Produktmarken.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() =>
                    document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 bg-orange-600 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-orange-500"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() =>
                    document.querySelector("#ueber-uns")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 border border-zinc-700 px-5 py-2.5 text-[13px] font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  Mehr erfahren
                </button>
              </motion.div>
            </div>

            {/* Right: network infographic */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[720/320] w-full">
                <NetworkGrid />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease }}
                className="absolute top-4 left-4 flex items-center gap-2 border border-zinc-800 bg-zinc-900/90 px-3 py-2 shadow-sm backdrop-blur-sm"
              >
                <Layers className="h-3.5 w-3.5 text-orange-500" strokeWidth={1.5} />
                <span className="text-[11px] font-medium text-zinc-400">Plattformen</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease }}
                className="absolute right-4 bottom-4 flex items-center gap-2 border border-zinc-800 bg-zinc-900/90 px-3 py-2 shadow-sm backdrop-blur-sm"
              >
                <Globe className="h-3.5 w-3.5 text-orange-500" strokeWidth={1.5} />
                <span className="text-[11px] font-medium text-zinc-400">Internationale Märkte</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom stat blocks */}
          <div className="mt-16 grid grid-cols-3 border-t border-zinc-800 pt-10 md:mt-20">
            <AnimatedStat value="CH" label="Firmensitz Schweiz" delay={0.6} />
            <AnimatedStat value="" countTo={3} label="Geschäftsfelder" delay={0.7} />
            <AnimatedStat value="Int" suffix="." label="Internationale Reichweite" delay={0.8} />
          </div>
        </div>
      </div>

      {/* Clean edge transition */}
      <div className="relative h-px w-full bg-zinc-800" />
      <div className="h-16 bg-gradient-to-b from-zinc-950 via-zinc-950/40 to-transparent" />
    </section>
  )
}
