import React from "react"
import { useEffect, useState } from "react"
import "./Tictactoe.css"
import tic from "../pictures/tic-tac-toe.webp"

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
    <div>
      <img
        className="mainImg-tic"
        src={imgs[index]}
        alt="tic-tac toe renderings"
      />
      <div className="buttons"></div>
    </div>
  )
}

function tictactoe(props) {
  return (
    <div>
      <div className="project-tictactoe">
        <Slideshow imgs={[tic]} />

        <div className="tic-info-container">
          <h2 className="title">Tic Tac Toe</h2>
          <p className="info">
            Tic tac toe utilizes Javascript to re-create the classic game. The
            board keeps track of each of the players' moves. After a winner/draw
            is declared the player will not be able to make an additional move
            and a reset button lets both players play again.
            <br></br>
            <br></br>
            <hr className="hr"></hr>
            <span className="tech">HTML | CSS | Javascript</span>
          </p>
          <a href="https://gloomytictactoe.surge.sh/" target="_blank">
            <button className="live-demo">See App</button>
          </a>
          <a href="https://github.com/kennethachan/Tic-Tac-Toe" target="_blank">
            <button className="code">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default tictactoe
