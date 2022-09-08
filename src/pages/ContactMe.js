import React from "react"
import "./ContactMe.css"
import { Link } from "react-router-dom"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"

function ContactMe(props) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_kdmce2q",
        "template_f7t26ov",
        form.current,
        "bVJ3BTuxY7X8m0T57"
      )
      .then(
        (result) => {
          e.target.reset()
          alert("Message Sent! :)")
          console.log(result.text)
          console.log("message sent")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact-wrapper">
      <header className="res-header">
        <div className="links">
          <Link className="contact-link" to="/">
            Home
          </Link>
          <Link className="contact-link" to="/about">
            About
          </Link>
          <Link className="resume" to="/resume">
            Resume
          </Link>
          <a
            className="github"
            href="https://github.com/kennethachan"
            target="_blank"
          >
            {" "}
            <img className="header-icon" src={github}></img>
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/kennethachan/"
            target="_blank"
          >
            <img className="header-icon" src={linkedin}></img>
          </a>
        </div>
      </header>
      <div className="contact-heading">
        {/* <h3 className="cont-name">Kenneth Chan</h3> */}
        <h1 className="contact-title">Better Together</h1>
      </div>

      <div className="contact-container">
        <div className="contact-notes">
          <p>
            I enjoy working with dedicated creatives to help make the world a
            more beautiful place. Lets Talk!
          </p>

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
            Give me a call:
            <span className="number">(914)-310-3522</span>
          </li>
        </div>

        <div className="form-container">
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              className="input"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <input
              className="input"
              type="tel"
              name="tel"
              placeholder="Phone Number"
            />
            <textarea
              className="input-message"
              name="message"
              placeholder="Write Your Message Here!"
            />
            <br />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
