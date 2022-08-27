import React from "react"
import Resume from "../pages/Resume"
import { Link } from "react-router-dom"
import "./Header.css"

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="links">
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
            Github
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kennethachan/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header
