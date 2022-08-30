import React from "react"
import "./Skills.css"
import logo from "../pictures/coding-logo.png"
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

function Skills(props) {
  return (
    <div>
      <div>
        <h2 className="skills-title">Skills</h2>
      </div>
      <div>
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

    // <div className="skills-container">
    //   <div className="logo">
    //     <img className="coding-logo" src={logo}></img>
    //   </div>
    //   <div className="skills-wrapper">
    //     <div className="skillsets">
    //       <h2 className="skills-title">Skills</h2>
    //       <li className="list">
    //         <span className="programming">Programming Languages:</span> HTML |
    //         CSS | JavaScript | <br />
    //         React.js | Vue.js | Python3 | Django
    //       </li>
    //       <li className="list">
    //         <span className="libraries">Frameworks and Libraries:</span> Node.js
    //         | Express | jQuery |<br /> Mongoose
    //       </li>
    //       <li className="list">
    //         <span className="libraries">Database:</span> MongoDB | PostgreSQL
    //         <br />
    //       </li>
    //       <li className="list">
    //         <span className="tools">Tools/Other:</span>Git |GitHub | RESTful
    //         APIs | <br />
    //         MERN/PERN stack applications
    //       </li>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Skills
