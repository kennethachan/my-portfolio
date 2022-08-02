import React from 'react';

function AboutMe(props) {
    return (
        <div className="aboutme">
        <h2>about me</h2>
        <img
          className="profile-pic"
          src="https://media-exp2.licdn.com/dms/image/C4E03AQGA9Gmt-jTxYA/profile-displayphoto-shrink_200_200/0/1657225082823?e=1663200000&v=beta&t=EzZYtu3lA8YIhn8r7SYYaAztnWEUqIgyJHAYSckL_yk"
        ></img>
        <p>
          I am an Enthusiastic full stack developer from the NYC area with a
          diverse background ranging from software engineering to
          architectural design. I am a creator. Always curious. I have a
          strong ambition to create work that is uniquely enjoyable and
          fulfilling to the user’s experience.
        </p>
      </div>
    );
}

export default AboutMe;