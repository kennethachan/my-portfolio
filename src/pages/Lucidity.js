import React from "react"
import "./Lucidity.css"
import { useEffect, useState } from "react"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import lucidityMain from "../pictures/lucidity-main.png"
import lucidityRegister from "../pictures/lucidity-register.png"
import lucidityLogin from "../pictures/lucidity-login.png"

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

function lucidity(props) {
  return (
    <div>
      <div className="project-lucidity ">
        <div className="interactive">
          <Slideshow imgs={[lucidityLogin, lucidityRegister, lucidityMain]} />
        </div>
        <div className="luc-info-container">
          <h2 className="title">Lucidity</h2>
          <p className="info">
            Lucidity is a MERN stack "lofi anime" themed productivity site
            inspired from the popular Youtube 24/7 livestream "lofi hip hop
            radio - beats to relax/study to" with inspired aesthetics from
            "slowed and reverbed" mixes found on Youtube and SoundCloud. These
            playlists and anime visuals have helped many people study, perform a
            tedious task or relax and clear their mind. This website brings
            these ideas together and creates a relaxing/positive environment to
            be productive and/or decompress. The website has (3) main features:
            a notepad where the user can add,edit and delete notes. A GIF image
            slider with preset GIFs and allows the user to add and delete new
            GIFs. A premade playlist lets the user select a playlist/track from
            SoundCloud.
            <hr></hr>
            <span className="tech">
              Mongoose | Express | React.js | Node.js
            </span>
          </p>
          <a
            className="link"
            href="http://lucidity-productivity.herokuapp.com/home"
            target="_blank"
          >
            <button className="see">Website</button>
          </a>
          <a href="https://github.com/kennethachan/Lucidity" target="_blank">
            <button className="see">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default lucidity
