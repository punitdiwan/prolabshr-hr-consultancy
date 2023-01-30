import React, { useRef, useEffect, useLayoutEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import {
  FaBriefcase,
  FaGlobeAmericas,
  FaUserFriends,
  FaDollarSign,
  FaAngleDoubleLeft,
  FaHeadset,
  FaInstalod,
  FaBook,
  FaPeopleArrows,
  FaRegBuilding,
  FaRegClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaCaretDown,
} from "react-icons/fa";
import Link from "next/link";
import Iconcolumn from '../Components/Iconcolumn';

function Aboutus() {
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
      {/* <Navigation /> */}
      <div
        className="nav-div-1  new-nav-1 mainHeader"
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
                <li>
                  <Link href="/recruitment"> Recruitment</Link>
                </li>
                <li>
                  <Link href="/recruitment"> Recruitment</Link>
                </li>
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
        <button className="btn-global">Get in Touch</button>
      </div>
      <div className="about-head">
        <h1>About Us</h1>
      </div>
      <div className="welcome-main">
        <div className="welcome-div">
          <h4>
            <span> Introduction</span>
          </h4>
          <h1 className="heading"> PROLABS HR</h1>

          <p>
            Company which started in April 2005 with a vision with building
            relationships with endless happiness and prosperity in human chain.
            This company is into business to build everlasting relationships.
            The aim is to provide satisfaction to the highest level. We have
            expertise in every industry which has scope of recruitment with end
            to end round the clock services
          </p>
          <p>
            Main vision is to make relationships lasting forever with humanity
            in mind and building the bond between employer and employee. To
            maintain the relationships forever with decades to come without any
            conflict
          </p>
        </div>
        <img src="/images/aboutus.jpg" />
      </div>
      <div className="welcome-main">
        <img src="/images/aboutus-2.jpg" />
        <div className="welcome-div">
          <h4>
            <span> Welcome to PROLABS HR</span>
          </h4>
          <h1>Our Focus</h1>

          <p>
            PROLABS HR is a leading professional recruitment consultancy
            specialising in the recruitment of permanent, contract and temporary
            positions on behalf of the world’s top employers.
          </p>
        </div>
      </div>
      <Iconcolumn />
      <div className="welcome-main about-2">
        <div className="welcome-div">
          <h4>
            <span> About Prolabs HR</span>
          </h4>
          <h1> We listen and work together to create a truly unique.</h1>

          <p>
            Now as the times are changing we are diversifying for every possible
            industry people aspire. Our goal is to invent new innovation in
            modern times. We have people working with various industries to
            cater different segment with complete efficiency
          </p>

          <div className="btn-div">
            <button className="btn-job"> Planning</button>
            <button className="btn-job">Performance</button>
          </div>
          <p>
            As responsible placement agencies in Delhi, we take care of the jobs
            hiring according to employers’ requirements from the junior level to
            the top management.
          </p>
        </div>
        <div className="icon-container">
          <div className="icon-container-1">
            <span>
              <FaBriefcase />
            </span>
            <h2>Analytics Solutions</h2>
          </div>
          <div className="icon-container-1">
            <span>
              <FaBriefcase />
            </span>
            <h2>Creative Solutions</h2>
          </div>
          <div className="icon-container-1">
            <span>
              <FaUserFriends />
            </span>
            <h2>Budget Friendly</h2>
          </div>
          <div className="icon-container-1">
            <span>
              <FaDollarSign />
            </span>
            <h2>Dedicated Support</h2>
          </div>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/aboutus-2.jpg" />
        <div className="welcome-div">
          <h4>
            <span> Welcome to Prolabs HR</span>
          </h4>
          <h1>Our Focus</h1>

          <p>
            Prolabs HR is a leading professional recruitment consultancy
            specialising in the recruitment of permanent, contract and temporary
            positions on behalf of the world’s top employers.
          </p>
          <div className="button-div">
            <div className="icon-container-1 button-div-1">
              <span>
                <FaAngleDoubleLeft />
              </span>
              <h2>Comprehensive care</h2>
            </div>
            <div className="icon-container-1 button-div-1">
              <span>
                <FaHeadset />
              </span>
              <h2>24/7 quick support</h2>
            </div>
            <div className="icon-container-1 button-div-1">
              <span>
                <FaInstalod />
              </span>
              <h2>Experience & talented</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="about-last">
        <h4>What we do</h4>
        <h1>Incredible true short facts about our company</h1>
        <div className="btn-div margin-top">
          <button className="btn-job"> For Job Seekers</button>
          <button className="btn-job">For Employers</button>
          <button className="btn-job">Our track record</button>
          <button className="btn-job">Distinguishing features</button>
        </div>
        <p>
          As responsible placement agencies in Delhi, we take care of the jobs
          hiring according to employers’ requirements from the junior level to
          the top management.
        </p>
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
      <Footer />
    </>
  );
}

export default Aboutus;
