import React from "react";
import profileImg from "../assets/hero-img.png";
import "./About.css";
import profile_img from "../assets/profile_img.png";

function About() {
  return (
    <div className="about">
      <div className="about-tittle">
        <h1>About</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Frontend Developer passionate about building responsive,
              modern, and user-friendly websites.
            </p>
            <p>
              I am passionate about crafting beautiful and functional digital
              experiences.{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Year of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default About;
