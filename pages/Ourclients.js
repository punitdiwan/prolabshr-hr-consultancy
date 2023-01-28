import React from "react";
import { FaCheck, FaGlobeAmericas } from "react-icons/fa";
import { Banner } from "./Banner";
import crypto from "crypto";

// let crypto;
// try {
//   crypto = require("crypto");
// } catch (err) {
//   console.log("crypto support is disabled!");
// }

var uuid = crypto.randomUUID;
console.log(uuid);

const images = [
  "/images/multicoreware.png",
  "/images/ennea-logo.09c372cb9a15aa5fefb3.png",
  "/images/Casagrand-Logo1.png",
  "/images/HDFC Sales Logo new-04.svg",
  "/images/Casagrand-Logo1.png",
  "/images/ennea-logo.09c372cb9a15aa5fefb3.png",
].map((image) => ({
  id: crypto.randomUUID,
  image,
}));

function Ourclients() {
  return (
    <>
      <div className="slider-div">
        <h1>Our Clients</h1>
        <Banner images={images} speed={10000} />
      </div>
      {/* <div className="welcome-main">
        <img src="/images/coca-cola.png" className="welcome-img-1" />
        <div className="welcome-div client-div ">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1> Coca-Cola</h1>

          <p>
            The drink Coca-Cola was originated in 1886 by an Atlanta pharmacist,
            John S. Pemberton (1831–88), at his Pemberton Chemical Company. His
            bookkeeper, Frank Robinson, chose the name for the drink and penned
            it in the flowing script that became the Coca-Cola trademark
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/kaff.jpg" className="welcome-img-1" />
        <div className="welcome-div client-div">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1> Kaff</h1>

          <p>
            KAFF is the number one player in the built-in appliances section
            across the country. The brand also manufactures kitchen accessories
            in a plant based in Sri Lanka. The Cook tops are built in a setup in
            North India.
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/usha.png" className="welcome-img-1" />
        <div className="welcome-div client-div">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1>Usha</h1>

          <p>
            Usha (India) [formerly Usha Rectifier Corporation (India)] was
            incorporated in Feb.’62. It is managed by Chairman Vinay Rai. It is
            engaged in the manufacture of semiconductor devices such as silicon
            diodes, thyristors, low power devices, semiconductor module bridges,
            rectifier stacks, etc
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/dlf.jpg" className="welcome-img-1" />
        <div className="welcome-div client-div">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1> DLF</h1>

          <p>
            DLF Limited is a commercial real estate developer. It was founded by
            Chaudhary Raghvendra Singh in 1946 and is based in New Delhi, India.
            DLF developed residential colonies in Delhi such as Shivaji Maharaj
            Park, Model Town, Rajouri Garden, Krishna Nagar, South Extension,
            Greater Kailash, Kailash Colony, and Hauz Khas.
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/India-Today.png" className="welcome-img-1" />
        <div className="welcome-div client-div">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1>India Today</h1>

          <p>
            Living Media India Limited is an Indian media conglomerate based in
            New Delhi, India. It has interests in magazines, newspapers, books,
            radio, television, printing and the Internet.
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/NIIT.png" className="welcome-img-1" />
        <div className="welcome-div client-div">
          <h4>
            <span> Our Clients</span>
          </h4>
          <h1> NIIT</h1>

          <p>
            With a footprint in over 30+ countries and 35 million+ learners
            worldwide, NIIT are a leading skills and talent development
            corporation building a manpower pool for global industry
            requirements. NIIT is a leading Skills and Talent Development
            Corporation that is building a manpower pool for global industry
            requirements.
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job"> Performance</button>
          </div>
          <p>
            Plans are part of your contract of employment. They are an annual
            agreement that set out your duties, responsibilities and objectives
            for the coming year.
          </p>
        </div>
      </div> */}
    </>
  );
}

export default Ourclients;
