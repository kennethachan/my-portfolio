import React from "react"
import "./AboutMe.css"

function AboutMe(props) {
  return (
    <div className="aboutme-container">
      <div>
        <img
          className="profile-pic"
          src="https://media-exp2.licdn.com/dms/image/C4E03AQGA9Gmt-jTxYA/profile-displayphoto-shrink_200_200/0/1657225082823?e=1663200000&v=beta&t=EzZYtu3lA8YIhn8r7SYYaAztnWEUqIgyJHAYSckL_yk"
        ></img>
      </div>
      <div className="aboutme">
        <p className="brand">
          <h1 className="name">Kenneth Chan</h1> Kenneth Chan is an enthusiastic
          Full Stack Software Engineer with a diverse background ranging from
          woodworking to architectural design. I am a creator. I am always
          curious. I have a strong ambition to create work that is -
          <span className="bold-brand">
            uniquely enjoyable and fulfilling to the user’s experience.
          </span>
        </p>
      </div>
    </div>
  )
}

export default AboutMe
