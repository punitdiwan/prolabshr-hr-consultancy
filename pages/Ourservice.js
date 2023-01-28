import React from "react";
import { FaCheck, FaGlobeAmericas } from "react-icons/fa";

function Ourservice() {
  return (
    <>
      <div className="service-main">
        <div className="our-service">
          <h3>Our Services</h3>
          <h1>Trusted & Safe</h1>
          <div className="service-img-1">
            <img src="/images/service.png" />
            <img src="/images/service2.png" />
          </div>
          <div className="service-img-1">
            <img src="/images/service3.png" />
            <img src="/images/service4.png" />
          </div>
        </div>
        <div className="last">
          <h1>Financial Recruitment Agencies</h1>
          <p>
            Prolabs HR, established as one of the top-rated placement
            agencies in Delhi, started in April 2005 with the aim of creating
            relationships with endless happiness and prosperity in the human
            chain.
          </p>
          <button className="btn-global">Read More</button>
        </div>
      </div>
    </>
  );
}

export default Ourservice;
