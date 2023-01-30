import React, { useRef, useEffect, useLayoutEffect }  from 'react';
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import {
    FaBook,
    FaPeopleArrows,
    FaRegBuilding,
    FaRegClock,
    FaCaretDown
  } from "react-icons/fa";
import Link from "next/link"; 

const Clients = () => {
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
      <Header/>
      {/* <Navigation/> */}
      <div className="nav-div-1 new-nav-1 mainHeader  " id="mainHeader"
        ref={stickyHeader}>
        <img src="/images/Pro_Logo-1.png" alt="logo" />
        <div className="nav-items">
          <ul className=" list-items">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/Aboutus">About Us</Link>
            </li>
            <li>
              Services
              <FaCaretDown />
              <ul className="dropdown1">
                <li>
                  <Link href="/Recruitment"> Recruitment</Link>
                </li>
                <li>
                  <Link href="/Recruitment"> Recruitment</Link>
                </li>
                <li>
                  <Link href="/Recruitment"> Recruitment</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Clients"> Our Clients</Link>
            </li>
            <li>
              <Link href="/Contactus"> Contact Us</Link>
            </li>
          </ul>
        </div>
        <button className="btn-global">Get in Touch</button>
      </div>
      <div className="about-head">
        <h1>Our Clients</h1>
      </div>
      <div className='client-card'>
        <div className='card'>
            <img src="/images/Vertex-logo.jpg" alt='vertex-logo' className='card-img'/>
            <h2>Vertex</h2>
            <p>We worked with Vertex (part of United Utilities) to develop a strategy to communicate its annual business plan to employees and help them understand their role in delivering it.</p>
        </div><br/><br/>
        <div className='card'>
            <img src="/images/loreal.png" alt='loreal-logo' />
            <h2>L'oreal</h2>
            <p>Japan is a sea teeming with the flotsam of foreign companies, large and small, who have buoyed then sank.After overcoming difficult government regulations and red tape.</p>
        </div>
        <div className='card'>
            <img src="/images/vatika.png" alt='vatika-logo'/>
            <h2>Vatika</h2>
            <p>Vatika Group is amongst the leading and most promising developers in the Indian real estate industry. The Group has transformed every walk of life through its project.</p>
        </div>
      </div>

       <div className="row-icon">
        <div className="row-icon-1">
          <span>
            <FaBook />
          </span>
          <p>11</p>
          <h4>Years of market Leadership</h4>
        </div>
        <div className="row-icon-1">
          <span><FaPeopleArrows /></span>
          <p>1380</p>
          <h4>Consultant</h4>
        </div>
        <div className="row-icon-1">
          <span><FaRegClock /></span>
          <p>3200</p>
          <h4>Career made till date</h4>
        </div>
        <div className="row-icon-1">
          <span><FaRegBuilding /></span>
          <p>80</p>
          <h4>Industries Covered</h4>
        </div>
      </div>
      <div className="welcome-main">
        <img src="/images/coca-cola.png" className="welcome-img-1" />
        <div className="welcome-div client-div">
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
      <div className='client-card'>
        <div className='card'>
            <img src="/images/Zee_TV.jpg" alt='vertex-logo' className='card-img'/>
            <h2>Zee Network</h2>
            <p>The major Indian media conglomerate Zee Enterprises Entertainment Limited, also known as Zee Network, has launched a company-wide rebrand today.</p>
        </div>
        <div className='card'>
            <img src="/images/Adobe.png" alt='loreal-logo'/>
            <h2>Adobe</h2>
            <p>The Adobe logo will also get a make-over that includes a slight shift in the tone of red used to make it a little warmer and more ‘contemporary,’ according to the company.</p>
        </div>
        <div className='card'>
            <img src="/images/American.png" alt='vatika-logo'/>
            <h2>American express</h2>
            <p>he American Express Company is an American multinational financial services corporation headquartered at 200 Vesey Street in New York City.</p>
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
      <Footer/>
    </>
  )
}

export default Clients;