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
        <Link className="email" to="/contact">Contact Me</Link>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
    );
}

export default Header;