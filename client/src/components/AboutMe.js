import React from 'react';
import "./AboutMe.css"

function AboutMe(props) {
    return (
        <div className="aboutme">
        <img
          className="profile-pic"
          src="https://media-exp2.licdn.com/dms/image/C4E03AQGA9Gmt-jTxYA/profile-displayphoto-shrink_200_200/0/1657225082823?e=1663200000&v=beta&t=EzZYtu3lA8YIhn8r7SYYaAztnWEUqIgyJHAYSckL_yk"
        ></img>
         <h1>Kenneth Chan</h1>
        <h2>about me</h2>
        <p className="brand">
          I am an Enthusiastic full stack developer based in the NYC area with a
          diverse background ranging from software engineering to
          architectural design. I am a creator. Always curious. I have a
          strong ambition to create work that is uniquely enjoyable and
          fulfilling to the user’s experience.
        </p>
      </div>
    );
}

export default AboutMe;