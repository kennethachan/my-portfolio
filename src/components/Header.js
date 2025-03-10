import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"
import github from "../pictures/github-white.png"
import linkedin from "../pictures/linkedin-white.png"

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="links">
          <div className="logo">
            <h1 className="name">
            <Link to="/" 
  style={{  color: "white", textDecoration: "none", }} 
  onMouseEnter={(e) => e.target.style.textShadow = "0px 0px 8px rgba(255, 255, 255, 0.8)"} 
  onMouseLeave={(e) => e.target.style.textShadow = "none"}
>Kenneth Chan</Link>
            </h1>
            <h3 className="job">Full Stack Developer</h3>
          </div>
          <div className="navbar">
            <Link className="contact-link" to="/">
              Home
            </Link>
            <Link className="contact-link" to="/about">
              About
            </Link>
            {/* <Link className="resume" to="/resume">
              Resume
            </Link> */}
            <Link className="contact-link" to="/contact">
              Contact Me
            </Link>
            <a
              className="github"
              href="https://github.com/kennethachan"
              target="_blank"
            >
              {" "}
              <img className="header-icon" src={github} alt="github logo"></img>
            </a>

            <a
              className="linkedin"
              href="https://www.linkedin.com/in/kennethachan/"
              target="_blank"
            >
              <img
                className="header-icon"
                src={linkedin}
                alt="github logo"
              ></img>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
