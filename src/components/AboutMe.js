import React from "react"
import "./AboutMe.css"
import profilePic from "../pictures/profile-pic3.jpg"
import Tabs from "./tab"
import TabPane from "./tab-pane"
import html from "../pictures/html.png"
import css from "../pictures/css.png"
import js from "../pictures/javascript.png"
import react from "../pictures/react.png"
import vue from "../pictures/vue.png"
import python from "../pictures/python.png"
import dj from "../pictures/django.png"
import node from "../pictures/node.png"
import ex from "../pictures/Express.png"
import jquery from "../pictures/jquery.svg"
import mongoose from "../pictures/mongoose.svg"
import mongodb from "../pictures/mongodb.png"
import postgresql from "../pictures/postgresql.png"
import git from "../pictures/git.png"
import github from "../pictures/github.png"
import api from "../pictures/api.png"

function AboutMe(props) {
  return (
    <div>
      <div className="aboutme-container">
        <div className="about-details">
          <h1 className="name">Kenneth Chan</h1>
          <h3 className="job">Full Stack Developer</h3>
          <p className="brand">
            Full Stack Developer based in the NYC area with a diverse background
            ranging from woodworking to architectural design. I am a creator. I
            am always curious. I have a strong ambition to create work that is -
            <span className="bold-brand">
              uniquely enjoyable and fulfilling to the user’s experience.
            </span>
          </p>
          <div className="skills-container">
            {/* <hr></hr> */}
            <Tabs>
              <TabPane name="Programming Languages" key="1">
                <img className="skill-icon" src={html}></img>HTML |
                <img className="skill-icon" src={css}></img>CSS |{" "}
                <img className="skill-icon" src={js}></img>JavaScript |{" "}
                <img className="skill-icon" src={react}></img>React.js |{" "}
                <img className="skill-icon" src={vue}></img>Vue.js |{" "}
                <img className="skill-icon" src={python}></img> Python3 |{" "}
                <img className="skill-icon" src={dj}></img> Django
              </TabPane>
              <TabPane name="Frameworks & Libraries" key="2">
                <img className="skill-icon" src={node}></img>Node.js |{" "}
                <img className="skill-icon" src={ex}></img>Express |{" "}
                <img className="skill-icon-jquery" src={jquery}></img>jQuery |{" "}
                <img className="skill-icon" src={mongoose}></img>Mongoose
              </TabPane>
              <TabPane name="Database" key="3">
                <img className="skill-icon" src={mongodb}></img>MongoDB |{" "}
                <img className="skill-icon" src={postgresql}></img>PostgreSQL
              </TabPane>
              <TabPane name="Tools" key="4">
                <img className="skill-icon" src={git}></img>Git |{" "}
                <img className="skill-icon" src={github}></img>GitHub |{" "}
                <img className="skill-icon" src={api}></img>RESTful APIs
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
