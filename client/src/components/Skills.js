import React from 'react';
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
            <li className="list"><span className="front-end">front-end:</span> HTML | CSS | React</li>
            <li className="list"><span className="back-end">back-end:</span> MongoDB | Mongoose | Express | Node.js </li>
            <li className="list"><span className="languages">languages:</span> Javascript</li>
            </div>
          </div>
          </div>
    );
}

export default Skills;