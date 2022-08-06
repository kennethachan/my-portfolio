import React from "react"
import "./ContactMe.css"
import { Link } from "react-router-dom"

function ContactMe(props) {
  return (
    <div>
      <header className="res-header">
        <div className="links">
          <Link className="contact-link" to="/">
            Home
          </Link>
          <Link className="resume" to="/resume">
            Resume
          </Link>

          <a
            className="github"
            href="https://github.com/kennethachan"
            target="_blank"
          >
            Github
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kennethachan/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </header>
      <div className="contact-container">
        <div className="contact">
          {/* <img className="contact-logo" src={contactMe}></img> */}
          <h2 className="contact-title">Contact</h2>
          <p>
            Send me a message below or email me <br />
            <a href="mailto:kennethandrechan@gmail.com" target="_blank">
              kennethandrechan@gmail.com
            </a>
          </p>
          <form action="mailto:kennethandrechan@gmail.com" method="POST">
            <input
              className="input"
              type="text"
              name="name"
              required
              placeholder="Name"
            ></input>
            <br />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            ></input>{" "}
            <br />
            <input
              className="input"
              type="text"
              name="message"
              required
              placeholder="Write your message here!"
            ></input>{" "}
            <br />
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
