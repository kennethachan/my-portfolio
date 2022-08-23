import React from "react"
import "./Rabido.css"
import { useEffect, useState } from "react"
import leftArrow from "../pictures/left-arrow.png"
import rightArrow from "../pictures/right-arrow.png"
import rabioCats from "../pictures/rabido-cats.png"
import rabioFeed from "../pictures/rabido-feed.png"
import rabioProfile from "../pictures/rabido-profile.png"

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
    <div className="slideshow">
      <div className="mainImg-container">
        <img className="mainImg" src={imgs[index]} />
      </div>

      <div className="actions">
        <div className="buttons">
          <img className="left-arrow" src={leftArrow} onClick={prev}></img>
          <img className="right-arrow" src={rightArrow} onClick={next}></img>
        </div>
      </div>
    </div>
  )
}

function Rabido(props) {
  return (
    <div>
      <div className="project-rabido ">
        <div className="interactive">
          <Slideshow imgs={[rabioFeed, rabioProfile, rabioCats]} />
        </div>
        <div className="luc-info-container">
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
            <hr></hr>
            PostgreSQL | Express | React.js | Node.js
          </p>
          <a
            className="link"
            href="http://lucidity-productivity.herokuapp.com/home"
            target="_blank"
          >
            <button className="see">See Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Rabido
