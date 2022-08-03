import React from 'react';
import { Link } from "react-router-dom"

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
        </div>
    );
}

export default lucidity;