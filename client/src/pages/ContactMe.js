import React from "react"
import "./ContactMe.css"
import { Link } from "react-router-dom"
import contactMe from "../pictures/contact.png"

function ContactMe(props) {
  return (
    <div className="contact-container">
      <div className="contact">
        {/* <img className="contact-logo" src={contactMe}></img> */}
        <h2 className="contact-title">Contact Me!</h2>
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
  )
}

export default ContactMe
