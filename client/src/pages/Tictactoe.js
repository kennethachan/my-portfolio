import React from 'react';
import { Link } from "react-router-dom"

function tictactoe(props) {
    return (
        <div>
           <header className="header">
        <div className="links">
        <Link className="resume" to="/">Back to Home</Link>
        <a className="github" href="https://github.com/kennethachan" target="_blank">
          Github
        </a>
        <a className="email" href="mailto:kennethandrechan@gmail.com" target="_blank">
          Contact Me
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
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
        </div>
    );
}

export default tictactoe;