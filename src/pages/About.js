import React from "react"
import "./About.css"
import { Link } from "react-router-dom"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"

function About(props) {
  return (
    <div>
      <header className="res-header">
        <div className="links">
          <Link className="resume" to="/">
            Home
          </Link>
          <Link className="resume" to="/resume">
            Resume
          </Link>
          <Link className="contact-link" to="/contact">
            Contact Me
          </Link>
          <a
            className="github"
            href="https://github.com/kennethachan"
            target="_blank"
          >
            {" "}
            <img className="header-icon" src={github}></img>
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kennethachan/"
            target="_blank"
          >
            <img className="header-icon" src={linkedin}></img>
          </a>
        </div>
      </header>
    </div>
  )
}

export default About
