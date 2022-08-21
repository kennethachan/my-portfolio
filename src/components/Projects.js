import React from "react"
import "./Projects.css"
import Pokedex from "../pages/Pokedex"
import Tictactoe from "../pages/Tictactoe"
import Lucidity from "../pages/Lucidity"
import Rabido from "../pages/Rabido"

function Projects(props) {
  return (
    <div>
      <Rabido />
      <Lucidity />
      <Pokedex />
      <Tictactoe />
    </div>
  )
}

export default Projects
