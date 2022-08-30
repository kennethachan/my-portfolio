import React from "react"
import "./AboutMe.css"
import profilePic from "../pictures/profile-pic3.jpg"

function AboutMe(props) {
  return (
    <div>
      <div className="aboutme-container">
        <img className="profile-pic" src={profilePic}></img>
        <h1 className="name">Kenneth Chan</h1>
        <h3 className="job">Full Stack Developer</h3>
        <p className="brand">
          Enthusiastic Full Stack Developer based in the NYC area with a diverse
          background ranging from woodworking to architectural design. I am a
          creator. I am always curious. I have a strong ambition to create work
          that is -
          <span className="bold-brand">
            uniquely enjoyable and fulfilling to the user’s experience.
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe
