import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resume from "./pages/Resume"

function App() {
  return (
  <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/resume" element={<Resume/>} />
    </Routes>
  </main>

  )
}

export default App
