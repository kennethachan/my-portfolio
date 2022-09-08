import React from "react"
import "../App.css"
import "./Home.css"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"

function Home(props) {
  return (
    <div className="App">
      <div className="about">
        <AboutMe />
      </div>
      <div className="project">
        <Projects />
      </div>
      <footer>
        Portfolio By Kenneth Chan ❤️
        <br></br>
        MockUp Templates By{" "}
        <a href="https://www.freepik.com/free-psd/portfolio-website-design-template_17973000.htm#page=9&query=website%20mock%20up&position=4&from_view=search">
          Freepik
        </a>
      </footer>
    </div>
  )
}

export default Home
