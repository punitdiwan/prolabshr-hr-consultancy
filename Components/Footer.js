import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-main">
          <div className="footer-2">
            <h1>About Us</h1>
            <div className="footer-1-1">
              <p>
                Prolabs HR is a leading professional recruitment consultancy
                specializing in the recruitment of permanent, contract, and
                temporary positions on behalf of the world’s top employers
              </p>
              <div className="icons">
                <a href="#">
                  <FaFacebookSquare />
                </a>
                <a href="#">
                  <FaTwitterSquare />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <h1>Contact Information </h1>
            <div className="footer-2-2">
              <p>
                <span>Address:</span> No. 45 6th Main, HVR Layout, Prasanth
                Nagar, Benguluru, Karnataka-560079
              </p>
              <p>
                <span>Email:</span> PROLABSHR@GMAIL.COM
              </p>
              <p>
                <span>Phone No:</span> +91- 7676975440
              </p>
              <p>
                <span>Whatsapp No:</span> +91- 7676975440
              </p>
            </div>
          </div>
          <div className="footer-2">
            <h1>Our Explore</h1>
            <div className="footer-2-2">
              <Link href="/aboutus">
                <h4>About us </h4>
              </Link>
              <Link href="/recruitment">
                <h4>Services</h4>
              </Link>
              <a href="#">
                <h4>Testimonials</h4>
              </a>
            </div>
          </div>
          <div className="footer-2">
            <h1>Quick Links</h1>
            <div className="footer-2-2">
              <Link href="/">
                <h4> Home </h4>
              </Link>
              <a href="#">
                <h4> Our Clients</h4>
              </a>
              <Link href="/contactus">
                <h4>Contact Us</h4>
              </Link>
            </div>
          </div>
        </div>
        <p>
          Copyrights © 2022 Prolabs HR. all rights reserved. Developed by
          <span className="copyright-link">
            {/* <a href="#"> */}
              {/* <i> */}

              <a href="http://maitretech.com/" target="_blank">
                {" "}
                Maitretech Solutions
              </a>
              {/* </i> */}
            {/* </a> */}
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
