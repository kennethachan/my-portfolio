import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Pokedex from "./pages/Pokedex"
import Tictactoe from "./pages/Tictactoe"

function App() {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/pokedex" element={<Pokedex/>} />
      <Route path="/tictactoe" element={<Tictactoe/>} />
    </Routes>
  </main>

  )
}

export default App
