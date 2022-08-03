import React from 'react';
import "./Resume.css"
import { Link } from "react-router-dom"

function Resume(props) {
    return (
        <div>
        <header className="header">
        <div className="links">
        <Link className="resume" to="/">Back to Home</Link>
        <a className="github" href="https://github.com/kennethachan" target="_blank">
          Github
        </a>
        <Link className="email" to="/contact">Contact Me</Link>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
        <div className="resume-container">
           <h1>Kenneth Chan</h1>
<li className="res-list">Full Stack Software Engineer</li>
<li className="res-list">Queens,NY | (914) 310-3522 </li>

<h3>SKILLS</h3>
<li className="res-list"><span className="bold-text">Programming Languages:</span> Python3, JavaScript, HTML, CSS, React.JS, Python3/Django, ReactJS</li>
<li className="res-list"><span className="bold-text">Frameworks and Libraries:</span> Node.js/Express, jQuery, Mongoose</li>
<li className="res-list"><span className="bold-text">Database:</span> MongoDB, PostgreSQL</li>
<li className="res-list"><span className="bold-text">Tools/Other:</span> Git, GitHub, RESTful APIs, MERN stack applications</li>

<h3>RELEVANT EXPERIENCE</h3>
<h4>Software Engineering Immersive Fellow | General Assembly | Remote </h4>
<h5 className="res-list">June 2022 - September 2022</h5>
<li className="res-list">Completed 500+ hours of expert-led instruction in JavaScript, Python, MongoDB, Node, React, and hands-on learning of web and mobile application fundamentals using the industry's most in-demand technologies. Developed projects, including:</li>
<li className="res-list"><span className="bold-text">Lucidity:</span> Lucidity is a “lofi anime” inspired productivity site to promote a positive environment for studying/relaxing built using MERN.  The site features registration/login authorization.  Once at the home page the notepad possesses full CRUD, a GIF slideshow that lets the user add/delete GIFs, and audio selection.</li>
<li className="res-list"><span className="bold-text">Kanto Region Pokedex:</span>Built with vanilla Javascript, HTML and CSS.  Based on the game series/show, the pokedex allows the user to randomly generate a pokemon card with stats and an image, user can type in a pokemon name to generate a specified pokemon card. Pokedex also features a dark mode option.</li>
<li className="res-list"><span className="bold-text">Tic Tac Toe:</span> Built with vanilla Javascript, HTML and CSS.  A classic 2 player game with a gloomy night drive theme</li>


<h4>Project Assistant (Estimator/Assistant Project Manager)| Ferra Designs | Brooklyn,NY</h4>
<h5>September 2021 - June 2022</h5>
<li className="res-list">Performed take off/ analyzed drawings & specifications for developers, collaborated with general contractors, institutions, and commercial establishments to determine scope of work and budget for custom metal fabrication up to $12M</li>
<li className="res-list">Prepared detailed takeoffs, counts, scope summaries, research material/components for many projects ex. “Waldorf Astoria”</li>
<li className="res-list">Coordinated  and assisted post sale transition with  PMs and Design Manager.</li>

<h4>Career Break | Health & Well-Being</h4>
<h5>July 2020 - September 2021</h5>
<li className="res-list">Voluntary leave due to health/family concerns during Covid 19 pandemic.</li>

<h4>Lead Estimator | Crown Signs | Mt. Vernon,NY</h4>
<h5>May 2016 - July 2020</h5>
<li className="res-list">Promoted from Assistant Estimator to Lead Estimator based on exemplary performance to provide fully developed budgets.</li>
<li className="res-list">Performed take off/ analyzed drawings & specifications for developers, general contractors, institutions, and commercial establishments to determine scope of work and budget for signage up to $500,000(+).</li>
<li className="res-list">Developed and maintained a bid tracker to monitor open, won, lost bids & project follow ups on google sheets.</li>
<li className="res-list">Assisted in training (3) estimators as well as (3) project managers.</li>

<h3>EDUCATION</h3>
<li className="res-list">General Assembly | Software Engineering Immersive | Remote | June 2022 - September 2022</li>
<li className="res-list">Architectural Engineering | University of Hartford | Hartford,CT | September 2012 - May 2016 | 3.4 GPA</li>

        </div>
        </div>
    );
}

export default Resume;