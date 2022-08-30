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

function Skills(props) {
  return (
    <div>
      <div>
        <h2 className="skills-title">Skills</h2>
      </div>
      <div>
        <Tabs>
          <TabPane name="Programming Languages" key="1">
            <img className="html" src={html}></img>HTML |
            <img className="css" src={css}></img>CSS |{" "}
            <img className="js" src={js}></img>JavaScript |{" "}
            <img className="react" src={react}></img>React.js |{" "}
            <img className="vue" src={vue}></img>Vue.js |{" "}
            <img className="python" src={python}></img> Python3 |{" "}
            <img className="dj" src={dj}></img> Django
          </TabPane>
          <TabPane name="Frameworks & Libraries" key="2">
            Node.js | Express | jQuery | Mongoose
          </TabPane>
          <TabPane name="Database" key="3">
            MongoDB | PostgreSQL
          </TabPane>
          <TabPane name="Tools" key="4">
            Git | GitHub | RESTful APIs | MERN/PERN stack applications
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
