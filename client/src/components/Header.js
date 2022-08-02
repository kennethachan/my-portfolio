import React from 'react';
import Resume from "../pages/Resume"
import { Link } from "react-router-dom"

function Header(props) {
    return (
        <header className="header">
        <h1>Kenneth Chan</h1>
        <h2 className="job-title">Software Engineer Student</h2>
        <Link to="/resume"><button>Resume</button></Link>
        <a href="https://github.com/kennethachan" target="_blank">
          <button>Github</button>
        </a>
        <a href="mailto:kennethandrechan@gmail.com" target="_blank">
          <button>Contact Me</button>
        </a>
        <a href="https://www.linkedin.com/in/kennethachan/" target="_blank">
          <button>LinkedIn</button>
        </a>
      </header>
    );
}

export default Header;