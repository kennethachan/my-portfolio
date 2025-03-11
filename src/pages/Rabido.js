import React from "react"
import "./Rabido.css"
import { useEffect, useState } from "react"
import rabidoRender from "../pictures/rabido-render-2.webp"

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="mainImg-container">
      <img className="mainImg-rab" src={imgs[index]} alt="Rabido renderings" />
    </div>
  )
}

function Rabido(props) {
  return (
    <div>
      <div className="project-rabido ">
        <Slideshow imgs={[rabidoRender]} />

        <div className="rab-info-container">
          <h2 className="title">Rabido</h2>
          <p className="info">
            Rabido is a PERN stack project that connects clients with
            freelancers. The freelancer signs up as a "Mark" to conditionally
            render "Mark" privileges and creates a profile to showcase their
            skillset. The freelancer will be able to make updates to their
            profile as necessary. The client signs up as a "Hunter" to view
            freelancers either by scrolling through the feed or searching
            through the categories page to find freelancers with the specific
            skill required. Rabido was a group project including myself and (2)
            other cohort members
            <br></br>
            <br></br>
            <hr className="hr"></hr>
            <span className="tech">
              PostgreSQL | Express | React.js | Node.js
            </span>
          </p>
          <a
            className="link"
            href="https://rabido.herokuapp.com/"
            target="_blank"
          >
            <button className="live-demo">See App</button>
          </a>
          <a href="https://github.com/kennethachan/Rabido" target="_blank">
            <button className="code">Github</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Rabido
