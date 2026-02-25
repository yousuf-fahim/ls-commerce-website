import { useState, useEffect } from "react"

const sectionIds = ["ueber-uns", "taetigkeitsfelder", "struktur", "kontakt"]

export function useScrollState() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const hero = document.getElementById("hero")
    if (!hero) {
      const handleScroll = () => setScrolled(window.scrollY > 80)
      handleScroll()
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      // trigger when hero fully exits viewport top (accounting for header height)
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return { scrolled, activeSection }
}
