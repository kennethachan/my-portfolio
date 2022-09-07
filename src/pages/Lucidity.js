import React from "react"
import "./Lucidity.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import lucRender from "../pictures/luc-render.png"
import lucMainRender from "../pictures/luc-main-render.png"
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
      <img className="mainImg-luc" src={imgs[index]} />

      <div className="buttons">
        <img className="left-arrow" src={leftArrow} onClick={prev}></img>
        <img className="right-arrow" src={rightArrow} onClick={next}></img>
      </div>
    </div>
  )
}

function lucidity(props) {
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
      <div className="project-lucidity ">
        <Slideshow imgs={[lucRender, lucMainRender]} />
        <div className="luc-info-container">
          <h2 className="title">Lucidity</h2>
          <p className="info">
            Lucidity is a MERN stack "lofi anime" themed productivity site
            inspired from the popular Youtube 24/7 livestream "lofi hip hop
            radio - beats to relax/study to" with inspired aesthetics from
            "slowed and reverbed" mixes found on Youtube and SoundCloud. These
            playlists and anime visuals have helped many people study, perform a
            tedious task or relax and clear their mind. This website brings
            these ideas together and creates a relaxing/positive environment to
            be productive and/or decompress.
            <hr></hr>
            <span className="tech">
              Mongoose | Express | React.js | Node.js
            </span>
          </p>
          <a
            className="link"
            href="http://lucidity-productivity.herokuapp.com/home"
            target="_blank"
          >
            <button className="live-demo">Live Demo</button>
          </a>
          <a href="https://github.com/kennethachan/Lucidity" target="_blank">
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default lucidity
