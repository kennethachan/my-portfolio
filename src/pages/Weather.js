import React from "react"
import "./Lucidity.css"
import { useEffect, useState } from "react"
import PSWeatherApp from "../pictures/iphone-weather.png"
import appRender from "../pictures/weatherapp-render.png"

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
    <div>
      <img className="mainImg-weather" src={imgs[index]} />
      <div className="actions">
        <div className="buttons"></div>
      </div>
    </div>
  )
}

function Weather(props) {
  return (
    <div>
      <div className="project-weather ">
        <Slideshow imgs={[appRender]} />
        <div className="weather-info-container">
          <h2 className="title">Weather App</h2>
          <p className="info">
            This weather app utilizes the "Open Weather" API to gather
            meteorological data to present the user with current weather
            forecasts as well as a forecast for the week. Once location sharing
            is enabled, the Open Weather API will obtain the geographical
            coordinates by using the name of the users location and display user
            specific weather patterns.
            <hr></hr>
            <span className="tech"> Vue.js | HTML | CSS | JavaScript</span>
          </p>
          <div className="btns">
            <a
              className="link"
              href="https://warmweatherapp.surge.sh/"
              target="_blank"
            >
              <button className="live-demo">Live Demo</button>
            </a>
            <a
              href="https://github.com/kennethachan/Weather_App/tree/main"
              target="_blank"
            >
              <button className="code">Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
