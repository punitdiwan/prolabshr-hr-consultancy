import React, { useRef, useEffect, useLayoutEffect } from "react";
import {
  FaCheck,
  FaGlobeAmericas,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaCaretDown,
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from "next/link";

function Recruitment() {
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
        <h1>Recruitment</h1>
      </div>
      <div className="welcome-main">
        <div className="welcome-div">
          <h4>
            <span> Recruitment</span>
          </h4>
          <h1 className="heading"> PROLABS HR</h1>

          <p>
            Identification, Attraction, Interviewing, Selection, Hiring, and
            Onboarding of personnel are all included in the recruitment process.
            In other words , it covers everything from identifying a staffing
            requirement to meeting it.
          </p>

          <div className="btn-div">
            <button className="btn-job">Planning</button>
            <button className="btn-job">Employers</button>
            <button className="btn-job">24/7 support</button>
          </div>
          <p>
            It contains the nature of the job, the requirements for experience,
            education, and talents, among other things.
          </p>
        </div>
        <img src="/images/home-2.jpg" />
      </div>
      <div className="call-now-main">
        <div className="call-now">
          <h1>We make difference</h1>
          <p>
            Recruitment services with resume writing services and business
            consulting
          </p>
          <button className="btn-global">Call Now: +91-7676975440 </button>
        </div>
      </div>
      <div className="welcome-main">
        <div className="welcome-div">
          <h1 className="heading"> Our Goals</h1>

          <p>
            Prolabs HR specislize in recruitment services. Our goal is to
            locate, attract, and hire the best professionals for our clients.
            All main job functions and a number of headhunting tasks have been
            reached. Our professional network is first-rate.
          </p>
          <p>
            We conduct searches for all different kinds of businesses—global,
            regional, large, and small. Always forming long-term partnerships is
            our goal.
          </p>
        </div>
        <img src="/images/home-2.jpg" />
      </div>

      {/* ********* form ***********  */}
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

        <div className="container">
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
            {/* <div className="row">
    <input type="submit" value="Submit"/>
  </div> */}
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Recruitment;
