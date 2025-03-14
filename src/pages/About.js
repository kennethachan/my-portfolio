import React from "react"
import "./About.css"
import profilePic from "../pictures/profile-pic3.jpg"

function About(props) {
  return (
    <div>
      <div className="about-me">
        <img
          className="main-pic"
          src={profilePic}
          alt="profile picture of kenneth chan"
        ></img>
<hr style={{ border: "none", height: "2px", backgroundColor: "white" }} />

        <p>
          Welcome to my portfolio! I am a graduate of General Assembly's
          Software Engineering Immersive Program with a non-coding background in
          architecture. My studies and experience in the architectural field had
          fostered in me an interest in social impact, sustainability,
          aesthetics, authenticity, design and most importantly to find
          solutions to real world problems using technology. I am currently
          applying the skills I gained to continue building projects and search
          for career opportunities in tech.
          <br></br>
          <br></br>A little bit more about me, I enjoy skateboarding, DIY
          building, film photography and film!
        </p>
      </div>
    </div>
  )
}

export default About
