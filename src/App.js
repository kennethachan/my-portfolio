import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Pokedex from "./pages/Pokedex"
import Tictactoe from "./pages/Tictactoe"
import ContactMe from "./pages/ContactMe"
import Lucidity from "./pages/Lucidity"
import About from "./pages/About"
import Weather from "./pages/Weather"

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/lucidity" element={<Lucidity />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
