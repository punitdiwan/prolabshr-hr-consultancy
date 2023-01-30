import React, { useRef, useEffect, useLayoutEffect } from "react";
import Navigation from "../Components/Navigation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaCaretDown,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

function Contactus() {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixedTop");
      } else {
        mainHeader.classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
      <Header />
      {/* <Navigation/> */}
      <div
        className="nav-div-1 new-nav-1 mainHeader"
        id="mainHeader"
        ref={stickyHeader}
      >
        <img src="/images/Pro_Logo-1.png" alt="logo" />
        <div className="nav-items">
          <ul className=" list-items">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              Services
              <FaCaretDown />
              <ul className="dropdown1">
                <li>
                  <Link href="/recruitment"> Recruitment</Link>
                </li>
                {/* <li>
                  <Link href="/recruitment"> Recruitment</Link>
                </li>
                <li>
                  <Link href="/recruitment"> Recruitment</Link>
                </li> */}
              </ul>
            </li>
            {/* <li>
              <Link href="/Clients"> Our Clients</Link>
            </li> */}
            <li>
              <Link href="/contactus"> Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link href="/contactus" className="btn-global">
          Get in Touch
        </Link>
      </div>
      <div className="about-head">
        <h1>Contact Us</h1>
      </div>
      <br />
      <br />
      <div className="recruitment-main">
        <div className="recruitment-1">
          <h1>Have you any questions? Feel free to contact us</h1>
          <p>
            If you want to get more information about Prolabs HR, banking job
            agencies, and financial recruitment agencies, the best way to reach
            us is by filling out the following contact form.
          </p>
          <div className="icons icons-1">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
            <a
              href="https://www.linkedin.com/company/prolabs-hr-solutions/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="row-icon">
        <div className="row-icon-1">
          <span>
            <FaEnvelope />
          </span>
          <p>Email Address</p>
          <br />
          <h4>PROLABSHR@GMAIL.COM</h4>
          <h4>HR@PROLABSHR.IN</h4>
        </div>
        <div className="row-icon-1">
          <span>
            <FaMapMarkerAlt />
          </span>
          <p>Our Address</p>
          <br />
          <h4>
            No. 45 6th Main, HVR Layout, Prasanth Nagar, Benguluru,
            Karnataka-560079
          </h4>
        </div>
        <div className="row-icon-1">
          <span>
            <FaMobileAlt />
          </span>
          <p>Phone Number</p>
          <br />
          <h4>+91 7676975440</h4>
        </div>
      </div>
      {/* <div className="recruitment-main"> */}
      {/* <div className="container">
          <form action="/action_page.php" autoComplete="off">
            <div className="row">
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
            <br />
            <button className="btn-global">Submit</button>
            <div className="row">
    <input type="submit" value="Submit"/>
  </div>
          </form>
        </div> */}
      {/* </div> */}

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.829095508965!2d77.52979561425349!3d12.982780518146955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dc6c3d5756f%3A0x2631ebfd20bfec5a!2s45%2C%206th%20Main%20Rd%2C%20KHB%20Colony%2C%20Basaveshwar%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560079!5e0!3m2!1sen!2sin!4v1674821800494!5m2!1sen!2sin"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
