import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-img.png";

function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={heroImage} alt="" />
      <h1>
        <span className="name">I am Himel</span>, Frontend Developer
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum
        sed optio praesentium sapiente. Qui soluta quisquam animi enim
        laudantium.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
