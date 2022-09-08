import React from "react"
import "./SpotCheck.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"
import spotcheck from "../pictures/spotcheck-render1.png"

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
    <div className="spot-img-container">
      <img className="mainImg-spot" src={imgs[index]} />

      <div className="buttons-spot">
        <img className="left-arrow" src={leftArrow} onClick={prev}></img>
        <img className="right-arrow" src={rightArrow} onClick={next}></img>
      </div>
    </div>
  )
}

function SpotCheck(props) {
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
      <div className="project-spotcheck ">
        <Slideshow imgs={[spotcheck]} />
        <div className="spot-info-container">
          <h2 className="title">SpotCheck</h2>
          <p className="info">
            SpotCheck is an PERN Stack app that documents NYC street spots for
            skateboarders. Typically street spots are spread through word of
            mouth and the spots are given different nicknames by different
            people. Street spot names and spot directions could be different
            depending who you ask. This app will help document newly made/found
            skate spots to help the skate community explore and conquer those
            spots they saw in their favorite skate videos.
            <hr></hr>
            <span className="tech">
              PostgreSQL | Express | React.js | Node.js
            </span>
          </p>
          <a
            className="link"
            href="http://lucidity-productivity.herokuapp.com/home"
            target="_blank"
          >
            <button className="live-demo">Live Demo</button>
          </a>
          <a href="https://github.com/kennethachan/SpotCheck" target="_blank">
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SpotCheck
