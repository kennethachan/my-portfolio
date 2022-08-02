import React from 'react';

function Projects(props) {
    return (
        <div>
             <h2>projects</h2>
          <div className="projects">
            <div className="project1">
              <h3>kanto region pokedex</h3>
              <img className="pokemon-landing" src="./pokemon-landing.png"></img>
              <img className="pokemon-main" src="./pokemon-main.png"></img>
              <a href="https://pokedexkanto.surge.sh/" target="_blank">
                <button>See Project</button>
              </a>
              <p>
                Pokemon API Project - Utilizing HTML, CSS and Javascript to make
                API calls and create a Pokedex with multiple features : a landing
                page with pokeball and bouncing animation. The user can generate
                random a pokemon card with stats and image, user can type in a
                pokemon name or number to generate specified pokemon card with
                stats and image, see all 151 pokemon and change their viewing
                experience with a dark mode option.
              </p>
            </div>
            <div className="project2">
              <h3>tic tac toe</h3>
              <img className="tic-one" src={require("../pictures/tic-1.png")} />
              <img className="tic-two" src={require("../pictures/tic-2.png")} />
              <a href="https://gloomytictactoe.surge.sh/" target="_blank">
                <button>See Project</button>
              </a>
              <p>
                Tic tac toe - Utilizing HTML, CSS and Javascript to re-create the
                classic game. This Javascript heavy project keeps track of players
                moves and declares a winner or draw. After winner is declared the
                player will not be able to make an additional move and a play
                again button lets both players play again.
              </p>
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