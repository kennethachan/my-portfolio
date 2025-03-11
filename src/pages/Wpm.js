import React from "react"
import { useEffect, useState } from "react"
import wpm from "../pictures/wpm.png"

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

function Wpm(props) {
  return (
    <div>
      <div className="project-weather ">
        <Slideshow imgs={[wpm]} />
        <div className="weather-info-container">
          <h2 className="title">WPM Typing Test</h2>
          <p className="info">
            React app developed to check how fast you can accurately type (words
            per minute) / hone in your typing skills.
            <br></br>
            <br></br>
            <hr className="hr"></hr>
            <span className="tech"> React.js | HTML | CSS | JavaScript</span>
          </p>
          <a
            className="link"
            href="https://thetypingdojo.netlify.app/"
            target="_blank"
          >
            <button className="live-demo">Live Demo</button>
          </a>
          <a
            href="https://github.com/kennethachan/wpm-typing-test"
            target="_blank"
          >
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Wpm
