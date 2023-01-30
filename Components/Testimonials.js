import React from "react";

function Testimonials() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Testimonials</h1>
      <div className="service-main service-bg">
        <div className="our-service">
          <div className="service-img">
            <img src="/images/google.png" />
            <img src="/images/timeout.png" />
          </div>
          <div className="service-img">
            <img src="/images/indiatoday.png" />
            <img src="/images/Timesofindia.png" />
          </div>
        </div>
        <div className="last">
          <h1>Financial Recruitment Agencies</h1>
          <p>
            PROLABS HR, a reputable recruitment agency not only understood
            the requirements well but also came up with great suggestions for
            the hiring initiatives. I like how they keep connections with both
            clients and candidates. All of this has not only increased our
            satisfaction and trust in them but has also raised expectations. All
            their efforts are great we wish them great success in their future
            as Job Consultancy.
          </p>
          {/* <p>
            Amit Sharma <span>HR-Google </span>
          </p> */}
          <p></p>
          {/* <button className="btn-global">Read More</button> */}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
