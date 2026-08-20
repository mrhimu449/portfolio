import React from "react";
import user_logo from "../assets/himel-logo-footer.svg";
import user_icon from "../assets/user.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={user_logo} alt="" />
          <p>
            I am a frontend developer and i have 5 year of experience in
            developement in many well-known company
          </p>
        </div>
        <div className="footer-top-right">
          <div className="email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2026 Himel. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
