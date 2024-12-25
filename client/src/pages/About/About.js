import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-5 col-lg-10 col-xs-15 about-img">
              <img
                // src="https://i.ibb.co/54SLtfM/linkedin-photo.jpg"
                //src="client\src\pages\About\pp.jpeg"
                src = "https://i.ibb.co/82dxgx3/Profile-pic-AB.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              

                    I am a final-year undergraduate student at NSUT, passionate about technology and software development. As a self-taught MERN stack developer, I have honed my skills through various personal projects and coursework, although I haven't yet had the opportunity to gain industry experience. I am now actively seeking job opportunities in Software Development Engineering (SDE) to apply my knowledge in a professional setting and contribute to innovative projects. My goal is to leverage my technical skills and enthusiasm for learning to grow within a dynamic and forward-thinking company.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
