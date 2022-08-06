import React from "react"
import "./ContactMe.css"
import { Link } from "react-router-dom"

function ContactMe(props) {
  return (
    <div className="contact-wrapper">
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
      <div className="contact-heading">
        <h3>Kenneth Chan</h3>
        <h1 className="contact-title">Better Together</h1>
      </div>

      <div className="contact-container">
        <div className="contact-notes">
          <p>
            {" "}
            I enjoy working with dedicated creatives to help make the world a
            more beautiful place.
          </p>
          <p>We can do so much together. Lets Talk!</p>

          <li className="reach-methods">
            Email me :
            <a
              className="email-link"
              href="mailto:kennethandrechan@gmail.com"
              target="_blank"
            >
              kennethandrechan@gmail.com
            </a>
          </li>
          <li className="reach-methods">
            If you want to hear my voice (914)-310-3522
          </li>
        </div>

        <div className="form-container">
          <form
            className="contactForm"
            action="mailto:kennethandrechan@gmail.com"
            method="POST"
          >
            <input
              className="input"
              type="text"
              name="name"
              required
              placeholder="First Name"
            ></input>
            <input
              className="input"
              type="text"
              name="name"
              required
              placeholder="Last Name"
            ></input>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email Address"
              required
            ></input>
            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            ></input>
            <input
              className="input-message"
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
