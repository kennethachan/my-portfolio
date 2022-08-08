import React from "react"
import "./Education.css"
import education from "../pictures/school.png"

function Education(props) {
  return (
    <div className="education-container">
      <div>
        <img className="education-logo" src={education}></img>
      </div>
      <div className="education-wrapper">
        <h2 className="education-title">Education</h2>
        <li className="list">
          <span className="school">General Assembly</span>: Software Engineering
          Immersive <br />
          (June 2022 - Sept 2022)
        </li>
        <li className="list">
          <span className="school">University of Hartford</span>: Architectural
          Engineering
          <br />
          (September 2012 - May 2016)
        </li>
      </div>
    </div>
  )
}

export default Education
