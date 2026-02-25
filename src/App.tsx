import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Home } from "@/pages/Home"
import { Impressum } from "@/pages/Impressum"
import { Datenschutz } from "@/pages/Datenschutz"
import { AGB } from "@/pages/AGB"
import { Widerruf } from "@/pages/Widerruf"
import { ScrollToTop } from "@/components/ScrollToTop"
import { PageTransition } from "@/components/PageTransition"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/impressum"
            element={
              <PageTransition>
                <Impressum />
              </PageTransition>
            }
          />
          <Route
            path="/datenschutz"
            element={
              <PageTransition>
                <Datenschutz />
              </PageTransition>
            }
          />
          <Route
            path="/agb"
            element={
              <PageTransition>
                <AGB />
              </PageTransition>
            }
          />
          <Route
            path="/widerruf"
            element={
              <PageTransition>
                <Widerruf />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
