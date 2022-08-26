import React from "react"
import "./Lucidity.css"
import { useEffect, useState } from "react"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import weatherApp from "../pictures/weather-app.png"
import "./Weather.css"

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

function Weather(props) {
  return (
    <div>
      <div className="project-lucidity ">
        <div className="interactive">
          <Slideshow imgs={[weatherApp]} />
        </div>
        <div className="weather-info-container">
          <h2 className="title">Weather App</h2>
          <p className="info">
            This weather app utilizes the "Open Weather" API to gather
            Observational Meteorological Data to present the user with current
            weather forcasts as well as a forecast for the week. Once location
            sharing is enabled, the Open Weather API will obtain the
            geographical coordinates by using the name of the users location and
            display user specific weather patterns.
            <hr></hr>
            <span className="tech"> Vue.js | HTML | CSS | JavaScript</span>
          </p>
          <a
            className="link"
            href="https://warmweatherapp.surge.sh/"
            target="_blank"
          >
            <button className="see">Website</button>
          </a>
          <a
            href="https://github.com/kennethachan/Weather_App/tree/main"
            target="_blank"
          >
            <button className="see">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Weather
