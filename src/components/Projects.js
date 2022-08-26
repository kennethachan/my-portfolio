import React from "react"
import "./Projects.css"
import Pokedex from "../pages/Pokedex"
import Tictactoe from "../pages/Tictactoe"
import Lucidity from "../pages/Lucidity"
import Rabido from "../pages/Rabido"
import Weather from "../pages/Weather"

function Projects(props) {
  return (
    <div>
      <Rabido />
      <Lucidity />
      <Weather />
      <Pokedex />
      <Tictactoe />
    </div>
  )
}

export default Projects
