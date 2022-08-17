import React from "react"
import "./Projects.css"
import Pokedex from "../pages/Pokedex"
import Tictactoe from "../pages/Tictactoe"
import Lucidity from "../pages/Lucidity"
import { Link } from "react-router-dom"
import lucidityHome from "../pictures/lucidity-home.png"

function Projects(props) {
  return (
    <div>
      <Lucidity />
      <Pokedex />
      <Tictactoe />
    </div>
  )
}

export default Projects
