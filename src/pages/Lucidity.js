import React from "react"
import "./Lucidity.css"
import { useEffect, useState } from "react"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import lucRender from "../pictures/luc-render.webp"
import lucMainRender from "../pictures/luc-main-render.webp"
import lucNotes from "../pictures/lucidity-home.png"
import lucGif from "../pictures/lucidity-gif.png"

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
        className="mainImg-luc"
        src={imgs[index]}
        alt="Lucidity renderings"
      />

      <div className="buttons-luc">
        <img className="left-arrow" src={leftArrow} onClick={prev}></img>
        <img className="right-arrow" src={rightArrow} onClick={next}></img>
      </div>
    </div>
  )
}

function lucidity(props) {
  return (
    <div>
      <div className="project-lucidity ">
        <Slideshow imgs={[lucRender, lucMainRender, lucNotes, lucGif]} />
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
            be productive and/or decompress.
            <br></br>
            <br></br>
            <hr className="hr"></hr>
            <span className="tech">
              Mongoose | Express | React.js | Node.js
            </span>
          </p>
          <a
            className="link"
            href="http://lucidity-productivity.herokuapp.com/home"
            target="_blank"
          >
            <button className="live-demo">Live Demo</button>
          </a>
          <a href="https://github.com/kennethachan/Lucidity" target="_blank">
            <button className="code">Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default lucidity
