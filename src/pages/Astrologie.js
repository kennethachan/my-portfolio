import React from "react"
import { useEffect, useState } from "react"
import astrologie from "../pictures/astrologie-render.webp"

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
        className="mainImg-weather"
        src={imgs[index]}
        alt="tic tac toe renderings"
      />
    </div>
  )
}

function Astrologie(props) {
  return (
    <div>
      <div className="project-weather ">
        <Slideshow imgs={[astrologie]} />
        <div className="weather-info-container">
          <h2 className="title">Daily Astrologie</h2>
          <p className="info">
            This React app utilizes the "Aztro" API to gather daily horoscopes,
            mood, lucky number, and lucky time for each of the 12 zodiacs. Who
            knows what the stars are trying to tell us...
            <hr className="hr"></hr>
            <span className="tech"> React.js | HTML | CSS | JavaScript</span>
          </p>
          <a
            className="link"
            href="https://dailyastrologie.netlify.app/"
            target="_blank"
          >
            <button className="live-demo">Live Demo</button>
          </a>
          <a href="https://github.com/kennethachan/Horoscope" target="_blank">
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Astrologie
