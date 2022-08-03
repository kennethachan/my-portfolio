import React from 'react';
import { Link } from "react-router-dom"
import lucidityMain from "../pictures/lucidity-main.png"
import lucidityRegister from "../pictures/lucidity-register.png"
import lucidityLogin from "../pictures/lucidity-login.png"
import "./Lucidity.css"

function lucidity(props) {
    return (
        <div>
            <header className="header">
        <div className="links">
        <Link className="resume" to="/">Back to Home</Link>
        <a className="github" href="https://github.com/kennethachan" target="_blank">
          Github
        </a>
        <a className="email" href="mailto:kennethandrechan@gmail.com" target="_blank">
          Contact Me
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
      <div className="project-lucidity ">
              <h3 className="title">Lucidity</h3>
              <img className="lucidity-login" src={lucidityLogin} />
              <img className="lucidity-register" src={lucidityRegister} />
              <img className="lucidity-main" src={lucidityMain} />
              <a className="link" href="http://lucidity-productivity.herokuapp.com/home" target="_blank">
                <button className="see">See Project</button>
              </a>
              <p className="description">
              Lucidity is a "lofi anime" productivity app inspired from the popular Youtube 24/7 livestream "lofi hip hop radio - beats to relax/study to" as well as the "slowed and reverbed" mixes on Youtube and SoundCloud. 
              These playlists and anime visuals have helped many people study, perform a tedious task or relax and clear their mind. This website brings these ideas together and creates a relaxing/positive environment to be productive or decompress. 
              The website has (3) main features: a notepad where the user can add,edit and delete notes. A GIF image slider with preset GIFs and allows the user to add and delete new GIFs. A premade playlist lets the user select a playlist/track from SoundCloud.
              </p>
            </div>
        </div>
    );
}

export default lucidity;