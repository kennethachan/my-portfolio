import React from 'react';
import "./Skills.css"

function Skills(props) {
    return (
<div className="skills-container">
            <div className="skills-wrapper">
            <h2>Skills</h2>
            <div className="skillsets">
            <p><span className="front-end">front-end:</span> HTML, CSS, React</p>
            <p><span className="back-end">back-end:</span> MongoDB, Mongoose, Express, Node.js </p>
            <p><span className="languages">languages:</span> Javascript</p>
            </div>
          </div>
          </div>
    );
}

export default Skills;