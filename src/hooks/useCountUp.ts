import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export function useCountUp(end: number, duration = 1200) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasRun = useRef(false)

  useEffect(() => {
    if (!isInView || hasRun.current) return
    hasRun.current = true

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return { count, ref }
}
