import React from 'react';
import { Link } from "react-router-dom"
import lucidityMain from "../pictures/lucidity-main.png"
import lucidityRegister from "../pictures/lucidity-register.png"
import lucidityLogin from "../pictures/lucidity-login.png"
import "./Lucidity.css"
import {useEffect, useState} from "react"


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


function lucidity(props) {
    return (
        <div>
            <header className="header">
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
      </header>
    
      <div className="project-lucidity ">
          <div className="interactive">      
              <Slideshow
        imgs={[
          lucidityLogin,
          lucidityRegister,
          lucidityMain
        ]}
      />
            
              </div>
              <div className="luc-info-container">
                <h1 className="title">Lucidity</h1>
              <p className="info">
              Lucidity is a "lofi anime" productivity app inspired from the popular Youtube 24/7 livestream "lofi hip hop radio - beats to relax/study to" as well as the "slowed and reverbed" mixes on Youtube and SoundCloud. 
              These playlists and anime visuals have helped many people study, perform a tedious task or relax and clear their mind. This website brings these ideas together and creates a relaxing/positive environment to be productive or decompress. 
              The website has (3) main features: a notepad where the user can add,edit and delete notes. A GIF image slider with preset GIFs and allows the user to add and delete new GIFs. A premade playlist lets the user select a playlist/track from SoundCloud.
              </p>
              <a className="link" href="http://lucidity-productivity.herokuapp.com/home" target="_blank">
                <button className="see">See Project</button>
              </a>
              </div>
            </div>
        </div>
    );
}

export default lucidity;