import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  FaCaretDown,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

function Responsive() {

  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        className="navigation-bar-1"
      >
        <div className="nav-div-1" id="nav-items-1">
          {/* <img src="" alt="logo" /> */}
          <div className="nav-items-1 navigation">
            <ul>
              <li>
                <Link href="/">Home </Link>
              </li>
              <li>
                <Link href="/aboutus">About Us</Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setShow(!show)}
                  className="nav_link1"
                >
                  Services
                  <FaCaretDown />
                </a>
                {show ? (
                  <ul className="dropdown-new">
                    <li>
                      <Link href="/recruitment" className="nav_link1">
                        Recruitment
                      </Link>
                    </li>
                  </ul>
                ) : (
                  show
                )}
              </li>
              {/* <li>
                {" "}
                <Link href="/Clients"> Our Clients</Link>
              </li> */}
              <li>
                <Link href="/contactus"> Contact Us </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Responsive;
