import React from "react";
import { FaCheck, FaGlobeAmericas } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="welcome-main">
        <div className="welcome-div">
          <h4>
            <span> About Us</span>
          </h4>
          <h1 className='heading'> PROLABS HR</h1>

          <p>
            PROLABS HR, established as one of the top-rated Job Consultancy, started in April 2005 with the aim of creating
            relationships with endless happiness and prosperity in the human
            chain. For more than 17 years, Prolabs HR served as a job
            consultancy. We are serving as a top consultancy.
            Our aim is to provide a satisfactory level of service to our
            clients.
          </p>

          <div className="btn-div">
            <button className="btn-job">
              <FaGlobeAmericas /> For Job Seeker
            </button>
            <button className="btn-job">
              <FaGlobeAmericas />
              For Employers
            </button>
          </div>
          <p>
            As responsible job consultancy, we take care of the jobs
            hiring according to employers’ requirements from the junior level to
            the top management.
          </p>
        </div>
        <img src="/images/home-2.jpg" />
      </div>
    </>
  );
}

export default About;
