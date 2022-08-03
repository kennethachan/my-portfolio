import React from 'react';
import { Link } from "react-router-dom"
import {useEffect, useState} from "react"
import "./Tictactoe.css"
import ticOne from "../pictures/tic-1.png"
import ticTwo from "../pictures/tic-2.png"
import tic2wins from "../pictures/tic-2wins.png"
import ticDraw from "../pictures/tic-draw.png"


const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <div className="buttons">
        <button className="left-arrow" onClick={prev}>◀</button>
        <button className="right-arrow" onClick={next}>▶</button>
        </div>
      </div>
    </div>
  )
}

function tictactoe(props) {
    return (
        <div>
           {/* <header className="header">
           <div className="links">
        <Link className="resume" to="/">Back to Home</Link>
        <Link className="resume" to="/resume">Resume</Link>
        <a className="github" href="https://github.com/kennethachan" target="_blank">
          Github
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        <Link className="email" to="/contact">Contact Me</Link>
        </div>
      </header> */}
            
            <div className="project-tictactoe">
             <div className="interactive">
              <Slideshow
        imgs={[
          ticOne,
          ticTwo,
          tic2wins,
          ticDraw
        ]}
      />
              </div>
              <div className="tic-info-container">
               <h2 className="title">Tic Tac Toe</h2>
              <p className="info">
                Tic tac toe - Utilizing HTML, CSS and Javascript to re-create the
                classic game. This Javascript heavy project keeps track of players
                moves and declares a winner or draw. After winner is declared the
                player will not be able to make an additional move and a play
                again button lets both players play again.
              </p>
              <a href="https://gloomytictactoe.surge.sh/" target="_blank">
                <button className="see">See Project</button>
              </a>
              </div>
            </div>
        </div>
    );
}

export default tictactoe;