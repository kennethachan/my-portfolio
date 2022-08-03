import React from 'react';
import Resume from "../pages/Resume"
import { Link } from "react-router-dom"
import "./Header.css"

function Header(props) {
    return (
        <header className="header">
        <div className="links">
        <Link className="resume" to="/resume">Resume</Link>
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
    );
}

export default Header;