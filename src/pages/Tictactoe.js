import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Tictactoe.css"
import ticOne from "../pictures/tic-1.png"
import ticTwo from "../pictures/tic-2.png"
import tic2wins from "../pictures/tic-2wins.png"
import ticDraw from "../pictures/tic-draw.png"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"

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
      <div className="mainImg-container">
        <img className="mainImg" src={imgs[index]} />
      </div>

      <div className="actions">
        <div className="buttons">
          <img className="left-arrow" src={leftArrow} onClick={prev}></img>
          <img className="right-arrow" src={rightArrow} onClick={next}></img>
        </div>
      </div>
    </div>
  )
}

function tictactoe(props) {
  return (
    <div>
      <div className="project-tictactoe">
        <div className="interactive">
          <Slideshow imgs={[ticOne, ticTwo, tic2wins, ticDraw]} />
        </div>
        <div className="tic-info-container">
          <h2 className="title">Tic Tac Toe</h2>
          <p className="info">
            Tic tac toe utilizes Javascript to re-create the classic game. The
            board keeps track of each of the players' moves. After a winner/draw
            is declared the player will not be able to make an additional move
            and a reset button lets both players play again.
            <hr></hr>
            HTML | CSS | Javascript
          </p>
          <a href="https://gloomytictactoe.surge.sh/" target="_blank">
            <button className="see">See Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default tictactoe
