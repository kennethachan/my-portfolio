import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Pokedex.css"
import pokedex from "../pictures/pokedex.png"
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
      <div className="mainImg-container-poke">
        <img className="mainImg-poke" src={imgs[index]} />
      </div>

      <div className="actions">
        <div className="buttons-poke">
          {/* <img className="left-arrow" src={leftArrow} onClick={prev}></img>
          <img className="right-arrow" src={rightArrow} onClick={next}></img> */}
        </div>
      </div>
    </div>
  )
}

function Pokedex(props) {
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
      <div className="project-pokedex">
        <div className="interactive">
          <Slideshow imgs={[pokedex]} />
        </div>
        <div className="poke-info-container">
          <h2 className="title">Kanto Region Pokedex</h2>
          <p className="info">
            The Kanto Region Pokedex utilizes Javascript and a Pokemon API to
            make API calls to populate the Pokedex with Pokemon stats. The site
            features : a landing page with an animated pokeball. The user is
            able to generate a random pokemon card to view stats and an image.
            The user is able to enter pokemon name or pokemon number to generate
            the specified pokemon card or see all 151 pokemon. Night mode option
            is integrated to create an alternative viewing experience.
            <hr></hr>
            <span className="tech">HTML | CSS | Javascript</span>
          </p>

          <a href="https://pokedexkanto.surge.sh/" target="_blank">
            <button className="live-demo">Live Demo</button>
          </a>
          <a
            href="https://github.com/kennethachan/Kanto-Region-Pokedex"
            target="_blank"
          >
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pokedex
