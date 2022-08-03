import React from 'react';
import "./ContactMe.css"
import { Link } from "react-router-dom"
import contactMe from "../pictures/contact.png"

function ContactMe(props) {
    return (
        <div className="contact-container">
        <div className="contact">
        <h2 className="contact-title">Want to Contact Me ?</h2>
        <form action="mailto:kennethandrechan@gmail.com" method="POST">
          <input className="input"type="text" name="name" required placeholder="Name"></input>
           <br/>
          <input className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          ></input> <br/>
          <input className="input"
            type="text"
            name="message"
            required
            placeholder="write your message here!"
          ></input> <br/>
          <button className="submit" type="submit">Submit</button>
        </form>
        </div>
        <div className="reach">
        <img className="contact-logo"src={contactMe}></img>
        <p> Feel free to email me <a href="mailto:kennethandrechan@gmail.com" target="_blank">kennethandrechan@gmail.com</a></p>
        <p> Also feel free to give me a call or send me a text (914) 310-3522</p>
      </div>
    </div>
    );
}

export default ContactMe;