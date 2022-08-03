import React from 'react';
import { Link } from "react-router-dom"
import {useEffect, useState} from "react"
import "./Pokedex.css"
import pokemonLanding from "../pictures/pokemon-landing.png"
import pokemonMain from "../pictures/pokemon-main.png"


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
          pokemonMain
        ]}
      />
             
              </div>
              <div className="poke-info-container">
              <h1 className="title">Kanto Region Pokedex</h1>
              <p className="info">
                Pokemon API Project - Utilizing HTML, CSS and Javascript to make
                API calls and create a Pokedex with multiple features : a landing
                page with pokeball and bouncing animation. The user can generate
                random a pokemon card with stats and image, user can type in a
                pokemon name or number to generate specified pokemon card with
                stats and image, see all 151 pokemon and change their viewing
                experience with a dark mode option.
              </p>
              <a href="https://pokedexkanto.surge.sh/" target="_blank">
                <button className="see" >See Project</button>
              </a>
              </div>
            </div>
        </div>
    );
}

export default Pokedex;