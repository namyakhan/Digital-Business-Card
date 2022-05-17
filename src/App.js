import "./App.css"
import React from "react"
import Info from "./components/Info"
import About from "./components/About"

import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
      <div className="box">
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  )
}
