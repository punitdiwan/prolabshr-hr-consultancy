import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import {
  FaCaretDown,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaRegClock,
  FaTwitterSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
// import Responsive from "../Components/Responsive";
import Header from "../Components/Header";

function Navigation() {
  const [show, setShow] = useState(false);

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
      <nav className="navigation-bar">
        <div
          className="nav-div-1 mainHeader"
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
        <div className="nav-div-2">
          <h1>
            <span className="span"> Right Fit! </span> Right Now!
          </h1>
          <p>
            If you are looking for a job or trying to find the best candidate
            for your organisation. The best choice is
            <span className="heading">
              <i>
                <b> PROLABS HR </b>
              </i>
            </span>
            , one of the best Job Consultancy.
          </p>
          <div className="icons ">
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
      </nav>
    </>
  );
}
export default Navigation;

/* <div className="navigation">
        <ul>
          <li>
            
            <Link href="/" className="nav_link1">
              
              Home
            </Link>
          </li>
          <li>
            
            <Link href="/about" className="nav_link1">
              About
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => setShow(!show)} className="nav_link1">
              Treatments <FaCaretDown />
            </a>
            {show ? (
              <ul className="dropdown-new">
                <li>
                  <Link href="/obstetrics" className="nav_link1">
                    Obstetrics - Gynecologist Surgery Bhopal
                  </Link>
                </li>
                <li>
                  <Link href="/gynaecology" className="nav_link1">
                    Gynecology Bhopal
                  </Link>
                </li>
                <li>
                  <Link href="/Laparoscopic" className="nav_link1">
                    Laparoscopic Surgery in Bhopal
                  </Link>
                </li>
                <li>
                  <Link href="/fibroids" className="nav_link1">
                    Fibroids Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/adenomyosis" className="nav_link1">
                    Adenomyosis
                  </Link>
                </li>
                <li>
                  <Link href="/hysterectomy" className="nav_link1">
                    Hysterectomy Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/vaginalcosmetic" className="nav_link1">
                    Vaginal Cosmetic Surgery
                  </Link>
                </li>
                <li>
                  <Link href="/Infertility" className="nav_link1">
                    Infertility
                  </Link>
                </li>
                <li>
                  <Link href="/highrisk" className="nav_link1">
                    High Risk Pregnancy
                  </Link>
                </li>
              </ul>
            ) : (
              show
            )}
          </li>
          <li>
            
            <Link href="/gallery" className="nav_link1">
              
              Gallery
            </Link>
          </li>
          <li>
            
            <Link href="/contact" className="nav_link1">
              
              Contact
            </Link>
          </li>
        </ul>
      </div> */
// </>
// );
// }

// import React, { useState } from "react";
// import { FaCaretDown} from "react-icons/fa";
// // import { Link } from 'react-router-dom';
// import  Link from 'next/link';
// import Header from "../.next/static/webpack/pages/index.1e34afd63fa37b45.hot-update";
// import Responsive from "./Responsive";

// const Navigation = () => {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <div className="navigation">
//         <ul>
//           <li> <Link href="/"  className="nav_link1"> Home</Link></li>
//           <li> <Link href="/about" className="nav_link1">About</Link></li>
//           <li>
//             <a href="#" onClick={() => setShow(!show)} className="nav_link1">
//               Treatments <FaCaretDown/>
//             </a>
//             {show ? (
//               <ul className="dropdown-new">
//                <li>
//                   <Link href="/obstetrics" className="nav_link1">
//                     Obstetrics - Gynecologist Surgery Bhopal
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/gynaecology" className="nav_link1">
//                     Gynecology Bhopal
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/Laparoscopic" className="nav_link1">
//                     Laparoscopic Surgery in Bhopal
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/fibroids" className="nav_link1">
//                     Fibroids Surgery
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/adenomyosis" className="nav_link1">
//                     Adenomyosis
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/hysterectomy" className="nav_link1">
//                     Hysterectomy Surgery
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/vaginalcosmetic" className="nav_link1">
//                     Vaginal Cosmetic Surgery
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/Infertility" className="nav_link1">
//                     Infertility
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/highrisk" className="nav_link1">
//                     High Risk Pregnancy
//                   </Link>
//                 </li>
//               </ul>
//             ) : (
//               show
//             )}
//           </li>
//           <li> <Link href="/gallery" className="nav_link1"> Gallery</Link></li>
//           <li> <Link href="/contact" className="nav_link1">  Contact</Link></li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navigation;
