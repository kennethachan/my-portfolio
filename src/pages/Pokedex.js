import React from "react"
import { useEffect, useState } from "react"
import "./Pokedex.css"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import pokedex from "../pictures/pokedex.webp"
import pokedexMulti from "../pictures/pokedex-render.webp"

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
        className="mainImg-poke"
        src={imgs[index]}
        alt="Pokedex renderings"
      />

      <div className="buttons-poke">
        <img className="left-arrow" src={leftArrow} onClick={prev}></img>
        <img className="right-arrow" src={rightArrow} onClick={next}></img>
      </div>
    </div>
  )
}

function Pokedex(props) {
  return (
    <div>
      <div className="project-pokedex">
        <Slideshow imgs={[pokedexMulti, pokedex]} />
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
            <br></br>
            <br></br>
            <hr className="hr"></hr>
            <span className="tech">HTML | CSS | Javascript</span>
          </p>

          <a href="https://pokedexkanto.surge.sh/" target="_blank">
            <button className="live-demo">See App</button>
          </a>
          <a
            href="https://github.com/kennethachan/Kanto-Region-Pokedex"
            target="_blank"
          >
            <button className="code">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pokedex
