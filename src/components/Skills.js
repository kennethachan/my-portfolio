import React from "react"
import "./Skills.css"
import logo from "../pictures/coding-logo.png"

function Skills(props) {
  return (
    <div className="skills-container">
      <div className="logo">
        <img className="coding-logo" src={logo}></img>
      </div>
      <div className="skills-wrapper">
        <div className="skillsets">
          <h2 className="skills-title">Skills</h2>
          <li className="list">
            <span className="programming">Programming Languages:</span> HTML |
            CSS | JavaScript | <br />
            React | Python | Django
          </li>
          <li className="list">
            <span className="libraries">Frameworks and Libraries:</span> Node.js
            | Express | jQuery |<br /> Mongoose
          </li>
          <li className="list">
            <span className="libraries">Database:</span> MongoDB | PostgreSQL
            <br />
          </li>
          <li className="list">
            <span className="tools">Tools/Other:</span>Git |GitHub | RESTful
            APIs | <br />
            MERN/PERN stack applications
          </li>
        </div>
      </div>
    </div>
  )
}

export default Skills
