import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
  FaBars,
} from "react-icons/fa";
import Responsive from "../Components/Responsive";



function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="header ">
        <div className="header-inner">
          <span>
            <FaRegClock />
          </span>
          <p>Mon-Sat 8:00-21:00</p>
        </div>
        <div className="header-2">
          <div className="header-inner">
            <span>
              <FaMapMarkerAlt />
            </span>
            <p>
              No. 45 6th Main, HVR Layout, Prasanth Nagar, Benguluru,
              Karnataka-560079
            </p>
          </div>
          <div className="header-inner">
            <span>
              <FaRegEnvelope />
            </span>
            <p> PROLABSHR@GMAIL.COM</p>
          </div>
          <div className="header-inner">
            <span>
              <FaPhoneAlt />
            </span>
            <p> +91-9873554734</p>
          </div>
        </div>
      </header>
      {/* ref={menuRef} */}
      <div
        className="responsive-nav mainHeader fixedTop  ">
        <img src="/images/Pro_Logo-1.png" alt="logo" />
        <a href="#" onClick={() => setShow(!show)} className="bars ">
          <FaBars />
        </a>
        {show ? <Responsive /> : show}
      </div>
    </>
  );
}

export default Header;
