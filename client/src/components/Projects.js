import React from 'react';
import "./Projects.css"
import Pokedex from "../pages/Pokedex"
import Tictactoe from "../pages/Tictactoe"
import Lucidity from "../pages/Lucidity"
import { Link } from "react-router-dom"
import lucidityHome from "../pictures/lucidity-home.png"


function Projects(props) {
    return (
        <div>
          <div className="projects">
             <div className="lucidity">
              <h3>Lucidity</h3>
              <img className="lucidity-home" src={lucidityHome}></img>
              <Link className="lucidity" to="/lucidity"><button className="more-info">Project Details</button></Link>
            </div>
            <div className="pokedex">
            <h3>Kanto Region Pokedex</h3>
            <img className="pokemon-main" src={"./pokemon-main.png"}></img>
            <Link className="pokedex" to="/pokedex">
        <button className="more-info">Project Details</button>
      </Link>
            </div>
            <div className="tictactoe">
              <h3>Tic Tac Toe</h3>
              <img className="tic-two" src={require("../pictures/tic-2.png")} />
              <Link className="tictactoe" to="/tictactoe">
        <button className="more-info">Project Details</button>
      </Link>
            </div>
            
          </div>
        </div>
    );
}

export default Projects;