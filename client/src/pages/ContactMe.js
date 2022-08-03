import React from 'react';
import "./ContactMe.css"
import { Link } from "react-router-dom"

function ContactMe(props) {
    return (
        <div>
        <header className="header">
        <div className="links">
        <Link className="resume" to="/">Back to Home</Link>
        <a className="github" href="https://github.com/kennethachan" target="_blank">
          Github
        </a>
        <a className="email" href="mailto:kennethandrechan@gmail.com" target="_blank">
          Contact Me
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/kennethachan/" target="_blank">
        LinkedIn
        </a>
        </div>
      </header>
        <div className="contact">
        <h2>contact me</h2>
        <form action="mailto:kennethandrechan@gmail.com" method="POST">
          <input type="text" name="name" required placeholder="Name"></input>
           <br/>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          ></input> <br/>
          <input className="message"
            type="text"
            name="message"
            required
            placeholder="write your message here!"
          ></input> <br/>
          <button type="submit">Submit</button>
        </form>
        <p> Feel free to email me <a href="mailto:kennethandrechan@gmail.com" target="_blank">kennethandrechan@gmail.com</a></p>
        <p> Also feel free to give me a call or send me a text (914) 310-3522</p>
      </div>
    </div>
    );
}

export default ContactMe;