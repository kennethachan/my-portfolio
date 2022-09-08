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
      <footer>Made By Kenneth Chan ❤️</footer>
    </div>
  )
}

export default Home
