import React from "react";
import "./Services.css";
import Services_Data from "../assets/services_data";

function Services() {
  return (
    <div className="services">
      <div className="service-tittle">
        <h1>My Services</h1>
      </div>
      <div className="service-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
