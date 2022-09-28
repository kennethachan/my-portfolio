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
import Rabido from "./pages/Rabido"
import SpotCheck from "./pages/SpotCheck"
import Astrologie from "./pages/Astrologie"
import Header from "./components/Header"

function App() {
  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/tictactoe" element={<Tictactoe />} />
        <Route path="/lucidity" element={<Lucidity />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/rabido" element={<Rabido />} />
        <Route path="/spotcheck" element={<SpotCheck />} />
        <Route path="/astrologie" element={<Astrologie />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App
