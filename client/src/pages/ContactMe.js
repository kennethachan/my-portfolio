import React from 'react';

function ContactMe(props) {
    return (
        <footer className="footer">
        <h2>contact me</h2>
        <form action="mailto:kennethandrechan@gmail.com" method="POST">
          <input type="text" name="name" required placeholder="Name"></input>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          ></input>
          <input
            type="text"
            name="message"
            required
            placeholder="write your message here!"
          ></input>
          <button type="submit">Submit</button>
        </form>
        <p>made by Kenneth Chan</p>
      </footer>
    );
}

export default ContactMe;