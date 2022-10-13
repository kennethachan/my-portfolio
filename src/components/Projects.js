import React from "react"
import "./Projects.css"
import "./Skills.css"
import { useNavigate } from "react-router-dom"
import appRender from "../pictures/weatherapp-render.webp"
import lucMainRender from "../pictures/luc-main-render.webp"
import pokedex from "../pictures/pokedex-render.webp"
import tic from "../pictures/tic-tac-toe.webp"
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
import rabidoRender from "../pictures/rabido-render-2.webp"
import spotMobileRender from "../pictures/spotcheck-mobile-render.webp"
import astrologie from "../pictures/astrologie-render.webp"

function Projects(props) {
  let navigate = useNavigate()
  return (
    <div>
      <div className="projects-container">
        <div className="spotcheck">
          <img
            className="preview"
            src={spotMobileRender}
            alt="iphone rendering of capstone project SpotCheck"
            onClick={() => navigate("/spotcheck")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/spotcheck")}>
              "Spot Check"
              <br></br>
              <span className="technologies">PERN Stack</span>
            </div>
          </div>
        </div>

        <div className="weather">
          <img
            className="preview"
            src={appRender}
            alt="iphone rendering of weather app"
            onClick={() => navigate("/weather")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/weather")}>
              "Weather App"
              <br></br>
              <span className="technologies">Vue</span>
            </div>
          </div>
        </div>
        <div className="lucidity">
          <img
            className="preview"
            src={lucMainRender}
            alt="macbook rendering of Lucidity project"
            onClick={() => navigate("/lucidity")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/lucidity")}>
              "Lucidity"
              <br></br>
              <span className="technologies">MERN Stack</span>
            </div>
          </div>
        </div>
        <div className="rabido">
          <img
            className="preview"
            src={rabidoRender}
            alt="macbook rendering with different pages for Rabido project"
            onClick={() => navigate("/rabido")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/rabido")}>
              "Rabido"
              <br></br>
              <span className="technologies">PERN Stack</span>
            </div>
          </div>
        </div>
        <div className="pokedex">
          <img
            className="preview"
            src={pokedex}
            alt="iphone rendering of pokedex project"
            onClick={() => navigate("/pokedex")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/pokedex")}>
              "Pokedex"
              <br></br>
              <span className="technologies">JavaScript</span>
            </div>
          </div>
        </div>
        <div className="rabido">
          <img
            className="preview"
            src={astrologie}
            alt="iphone rendering for daily astrologie app"
            onClick={() => navigate("/astrologie")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/astrologie")}>
              "Daily Astrologie"
              <br></br>
              <span className="technologies">React</span>
            </div>
          </div>
        </div>
        <div className="tictactoe">
          <img
            className="preview"
            src={tic}
            alt="iphone rendering of tic tac toe project"
            onClick={() => navigate("/tictactoe")}
          ></img>
          <div className="middle">
            <div className="text" onClick={() => navigate("/tictactoe")}>
              "Tic Tac Toe"
              <br></br>
              <span className="technologies">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <Tabs>
          <TabPane name="Programming Languages" key="1">
            <img className="skill-icon" src={html} alt="html logo"></img>HTML |
            <img className="skill-icon" src={css} alt="css logo"></img>CSS |{" "}
            <img className="skill-icon" src={js} alt="javascript logo"></img>
            JavaScript |{" "}
            <img
              className="skill-icon"
              src={python}
              alt="python logo"
            ></img>{" "}
            Python3 |{" "}
          </TabPane>
          <TabPane name="Frameworks & Libraries" key="2">
            <img className="skill-icon" src={react} alt="react logo"></img>
            React.js |{" "}
            <img className="skill-icon" src={vue} alt="vue logo"></img>Vue.js |{" "}
            <img className="skill-icon" src={node} alt="node.js logo"></img>
            Node.js |{" "}
            <img className="skill-icon" src={ex} alt="express logo"></img>
            Express |{" "}
            <img
              className="skill-icon-jquery"
              src={jquery}
              alt="jquery logo"
            ></img>
            jQuery |{" "}
            <img
              className="skill-icon"
              src={mongoose}
              alt="mongoose logo"
            ></img>
            Mongoose
            <img className="skill-icon" src={dj} alt="django logo"></img> Django
          </TabPane>
          <TabPane name="Database" key="3">
            <img className="skill-icon" src={mongodb} alt="mongodb logo"></img>
            MongoDB |{" "}
            <img
              className="skill-icon"
              src={postgresql}
              alt="postgresql logo"
            ></img>
            PostgreSQL
          </TabPane>
          <TabPane name="Tools" key="4">
            <img className="skill-icon" src={git} alt="git logo"></img>Git |{" "}
            <img className="skill-icon" src={github} alt="github logo"></img>
            GitHub | <img className="skill-icon" src={api} alt="api logo"></img>
            RESTful APIs
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Projects
