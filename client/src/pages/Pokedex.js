import React from 'react';

function Pokedex(props) {
    return (
        <div>
                <div className="project1">
              <h3>kanto region pokedex</h3>
              <img className="pokemon-landing" src="./pokemon-landing.png"></img>
              <img className="pokemon-main" src="./pokemon-main.png"></img>
              <a href="https://pokedexkanto.surge.sh/" target="_blank">
                <button>See Project</button>
              </a>
              <button>See Details</button>
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
        </div>
    );
}

export default Pokedex;