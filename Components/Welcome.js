import React from "react";
import { FaCheck } from "react-icons/fa";

const Welcome = () => {
  return (
    <>
      <div className="welcome-main">
        <img src="/images/welcome.jpg" />
        <div className="welcome-div">
          <h4>Welcome to <span className='heading'>PROLABS HR</span></h4>
          <h1>
            <span> Job C</span>onsultancy
          </h1>

          <p>
            Main vision is to make relationships lasting forever with humanity
            in mind and building the bond between employer and employee. To
            maintain the relationships forever with decades to come without any
            conflict
          </p>
          <div className="welcome-nested-main">
            <div className="welcome-nested">
              <div className="header-inner">
                <span>
                  <FaCheck />
                </span>
                <p> HR Recruitment and OutSource  </p>
              </div>

              <div className="header-inner">
                <span>
                  <FaCheck />
                </span>
                <p> Placement Assistance  </p>
              </div>
              <div className="header-inner">
                <span>
                  <FaCheck />
                </span>
                <p> Workforce Planning </p>
              </div>
            </div>
            <div className="welcome-nested">
              <div className="header-inner">
                <span>
                  <FaCheck />
                </span>
                <p>Staffing Solutions</p>
              </div>
              <div className=" header-inner">
                <span>
                  <FaCheck />
                </span>
                <p>Talent Acquisition </p>
              </div>
              <div className=" header-inner">
                <span>
                  <FaCheck />
                </span>
                <p> 7 days work atmosphere </p>
              </div>
            </div>
          </div>
          <div className="btn-div">
            <button className="btn-global">Contact Us</button>
            <button className="btn-global">View More Services</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
