import React from "react"
import "./ContactMe.css"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

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
          alert("Message Received! :)")
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-heading">
        <h1 className="contact-title">Contact Me!</h1>
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
            <span className="number"> (914)-310-3522</span>
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
