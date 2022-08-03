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
        <a className="email" href="mailto:kennethandrechan@gmail.com" target="_blank">
          Contact Me
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
        <div className="resume-container">
           <h1>Kenneth Chan</h1>
<p>Full Stack Software Engineer</p>
<p>Queens,NY | (914) 310-3522 </p>

<h3>SKILLS</h3>
<p>Programming Languages: Python3, JavaScript, HTML, CSS, React.JS, Python3/Django, ReactJS</p>
<p>Frameworks and Libraries: Node.js/Express, jQuery, Mongoose</p>
<p>Database: MongoDB, PostgreSQL</p>
<p>Tools/Other: Git, GitHub, RESTful APIs, MERN stack applications</p>

<h3>RELEVANT EXPERIENCE</h3>
<h4>Software Engineering Immersive Fellow | General Assembly | Remote </h4>
<h5>June 2022 - September 2022</h5>
<p>Completed 500+ hours of expert-led instruction in JavaScript, Python, MongoDB, Node, React, and hands-on learning of web and mobile application fundamentals using the industry's most in-demand technologies. Developed projects, including:</p>
<p>Lucidity: Lucidity is a “lofi anime” inspired productivity site to promote a positive environment for studying/relaxing built using MERN.  The site features registration/login authorization.  Once at the home page the notepad possesses full CRUD, a GIF slideshow that lets the user add/delete GIFs, and audio selection.</p>
<p>Kanto Region Pokedex:  Built with vanilla Javascript, HTML and CSS.  Based on the game series/show, the pokedex allows the user to randomly generate a pokemon card with stats and an image, user can type in a pokemon name to generate a specified pokemon card. Pokedex also features a dark mode option.</p>
<p>Tic Tac Toe: Built with vanilla Javascript, HTML and CSS.  A classic 2 player game with a gloomy night drive theme</p>


<h4>Project Assistant (Estimator/Assistant Project Manager)| Ferra Designs | Brooklyn,NY</h4>
<h5>September 2021 - June 2022</h5>
<p>Performed take off/ analyzed drawings & specifications for developers, collaborated with general contractors, institutions, and commercial establishments to determine scope of work and budget for custom metal fabrication up to $12M</p>
<p>Prepared detailed takeoffs, counts, scope summaries, research material/components for many projects ex. “Waldorf Astoria”</p>
<p>Coordinated  and assisted post sale transition with  PMs and Design Manager.</p>

<h4>Career Break | Health & Well-Being</h4>
<h5>July 2020 - September 2021</h5>
<p>Voluntary leave due to health/family concerns during Covid 19 pandemic.</p>

<h4>Lead Estimator | Crown Signs | Mt. Vernon,NY</h4>
<h5>May 2016 - July 2020</h5>
<p>Promoted from Assistant Estimator to Lead Estimator based on exemplary performance to provide fully developed budgets.</p>
<p>Performed take off/ analyzed drawings & specifications for developers, general contractors, institutions, and commercial establishments to determine scope of work and budget for signage up to $500,000(+).</p>
<p>Developed and maintained a bid tracker to monitor open, won, lost bids & project follow ups on google sheets.</p>
<p>Assisted in training (3) estimators as well as (3) project managers.</p>

<h3>EDUCATION</h3>
<p>General Assembly | Software Engineering Immersive | Remote | June 2022 - September 2022</p>
<p>Architectural Engineering | University of Hartford | Hartford,CT | September 2012 - May 2016 | 3.4 GPA</p>

        </div>
        </div>
    );
}

export default Resume;