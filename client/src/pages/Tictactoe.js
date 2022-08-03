import React from 'react';

function tictactoe(props) {
    return (
        <div>
            <div className="project2">
              <h3>tic tac toe</h3>
              <img className="tic-one" src={require("../pictures/tic-1.png")} />
              <img className="tic-two" src={require("../pictures/tic-2.png")} />
              <a href="https://gloomytictactoe.surge.sh/" target="_blank">
                <button>See Project</button>
              </a>
              <button>See Details</button>
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