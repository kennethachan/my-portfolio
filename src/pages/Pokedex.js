import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Pokedex.css"
import pokemonLanding from "../pictures/pokemon-landing.png"
import pokemonMain from "../pictures/pokemon-main.png"
import allpoke from "../pictures/allpokeday.png"
import pokenight from "../pictures/pokenight.png"
import allpokenight from "../pictures/allpokenight.png"

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
          <button className="left-arrow" onClick={prev}>
            ◀
          </button>
          <button className="right-arrow" onClick={next}>
            ▶
          </button>
        </div>
      </div>
    </div>
  )
}

function Pokedex(props) {
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
      <div className="project-pokedex">
        <div className="interactive">
          <Slideshow
            imgs={[
              pokemonLanding,
              pokemonMain,
              allpoke,
              pokenight,
              allpokenight,
            ]}
          />
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
            HTML | CSS | Javascript
          </p>
          <a href="https://pokedexkanto.surge.sh/" target="_blank">
            <button className="see">See Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pokedex
