import React from "react";
import "./Contact.css";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import phone_icon from "../assets/phone_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-tittle">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>
            I am available now for your project. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id minima perspiciatis vero asperiores
            ea distinctio est. In incidunt nulla voluptatibus!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>arefinabrarhimel@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Mathbaria, Pirojpur</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" /> <p>01983236549</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-right">
          <label htmlFor="">Enter your name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="">Enter your mail</label>
          <input type="text" placeholder="Enter your mail" />
          <label htmlFor="">Write your message</label>
          <textarea rows="8" placeholder="Write your message"></textarea>
          <button className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
