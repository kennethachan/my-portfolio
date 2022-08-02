import React from 'react';
import Resume from "../pages/Resume"
import { Link } from "react-router-dom"
import "./Header.css"

function Header(props) {
    return (
        <header className="header">
        <h1>Kenneth Chan</h1>
        <div className="buttons">
        <Link to="/resume"><button className="resume">Resume</button></Link>
        <a href="https://github.com/kennethachan" target="_blank">
          <button className="github" >Github</button>
        </a>
        <a href="mailto:kennethandrechan@gmail.com" target="_blank">
          <button className="email" >Contact Me</button>
        </a>
        <a href="https://www.linkedin.com/in/kennethachan/" target="_blank">
          <button className="linkedin">LinkedIn</button>
        </a>
        </div>
      </header>
    );
}

export default Header;