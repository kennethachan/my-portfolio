import React from 'react';
import "./Projects.css"
import Pokedex from "../pages/Pokedex"
import Tictactoe from "../pages/Tictactoe"
import { Link } from "react-router-dom"


function Projects(props) {
    return (
        <div>
             <h2>projects</h2>
          <div className="projects">
            <div className="project1">
            <h3>kanto region pokedex</h3>
            <img className="pokemon-main" src="./pokemon-main.png"></img>
            <Link className="pokedex" to="/pokedex">
        <button>More Info</button>
      </Link>
            </div>
            <div className="project2">
              <h3>tic tac toe</h3>
              <img className="tic-two" src={require("../pictures/tic-2.png")} />
              <Link className="tictactoe" to="/tictactoe">
        <button>More Info</button>
      </Link>
             
            </div>
            <div className="project3">
              <h3>placeholder</h3>
            </div>
            <div className="project4">
              <h3>placeholder</h3>
            </div>
          </div>
        </div>
    );
}

export default Projects;