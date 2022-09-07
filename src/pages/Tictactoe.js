import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Tictactoe.css"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import tic from "../pictures/tic-tac-toe.png"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"

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
      <div className="mainImg-container-tic">
        <img className="mainImg-tic" src={imgs[index]} />
      </div>

      <div className="actions">
        <div className="buttons">
          {/* <img className="left-arrow" src={leftArrow} onClick={prev}></img>
          <img className="right-arrow" src={rightArrow} onClick={next}></img> */}
        </div>
      </div>
    </div>
  )
}

function tictactoe(props) {
  return (
    <div>
      <header className="header">
        <div className="links">
          <Link className="resume" to="/">
            Home
          </Link>
          <Link className="contact-link" to="/about">
            About
          </Link>
          <Link className="resume" to="/resume">
            Resume
          </Link>
          <Link className="contact-link" to="/contact">
            Contact Me
          </Link>
          <a
            className="github"
            href="https://github.com/kennethachan"
            target="_blank"
          >
            {" "}
            <img className="header-icon" src={github}></img>
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kennethachan/"
            target="_blank"
          >
            <img className="header-icon" src={linkedin}></img>
          </a>
        </div>
      </header>
      <div className="project-tictactoe">
        <Slideshow imgs={[tic]} />

        <div className="tic-info-container">
          <h2 className="title">Tic Tac Toe</h2>
          <p className="info">
            Tic tac toe utilizes Javascript to re-create the classic game. The
            board keeps track of each of the players' moves. After a winner/draw
            is declared the player will not be able to make an additional move
            and a reset button lets both players play again.
            <hr></hr>
            <span className="tech">HTML | CSS | Javascript</span>
          </p>
          <a href="https://gloomytictactoe.surge.sh/" target="_blank">
            <button className="live-demo">Live Demo</button>
          </a>
          <a href="https://github.com/kennethachan/Tic-Tac-Toe" target="_blank">
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default tictactoe
