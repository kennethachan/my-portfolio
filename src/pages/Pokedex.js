import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Pokedex.css"
import pokemonLanding from "../pictures/pokemon-landing.png"
import pokemonMain from "../pictures/pokemon-main.png"
import allpoke from "../pictures/allpokeday.png"
import pokenight from "../pictures/pokenight.png"
import allpokenight from "../pictures/allpokenight.png"
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

function Pokedex(props) {
  return (
    <div>
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
            <button className="see">Website</button>
          </a>
          <a
            href="https://github.com/kennethachan/Kanto-Region-Pokedex"
            target="_blank"
          >
            <button className="see">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pokedex
