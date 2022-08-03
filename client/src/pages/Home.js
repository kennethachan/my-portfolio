import React from 'react';
import "../App.css"
import Resume from "./Resume.js"
import AboutMe from "../components/AboutMe"
import Education from "../components/Education"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

function Home(props) {
    return (
        <div className="App">
        <header className="header">
        <Header />
        </header>
        <div className="about">
         <AboutMe />
         </div>
        <div className = "project"> 
            <Projects/>
        </div>
        <div className="skills">
        <Skills />
          </div>
        <div className = "education"> 
            <Education/>
        </div>
      </div>
    );
}

export default Home;