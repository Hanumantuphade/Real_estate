import React from "react"
import { DarkModeProvider } from "./components/DarkModeContext"
import Header from "./components/Header"
import About from "./sections/About"
import Hero from "./sections/Hero"
import PopularAreas from "./sections/PopularAreas"
import Properties from "./sections/Properties"
import Services from "./sections/services"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />

      </DarkModeProvider>

    </>
  )
}

export default App
