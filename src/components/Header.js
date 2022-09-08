import React from "react"
import Resume from "../pages/Resume"
import { Link } from "react-router-dom"
import "./Header.css"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="links">
          <Link className="contact-link" to="/">
            Home
          </Link>
          <Link className="contact-link" to="/about">
            About
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

export default Header
