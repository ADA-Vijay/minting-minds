import React from "react";

const Navbar = () => {
  return (
    <section className="top-header-section">
      <header>
        <div className="header-icon">
          <img src="images/minting_minds_header.png" />
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="#o-p">Process</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#plans">Plans</a>
            </li>
            <li className="contact-li-nav">
              <a href="#contact">Contact</a>
              <i className="fa-solid arrow-icon contact-i single-pink rotate-arrow-icon fa-arrow-right"></i>
            </li>
          </ul>
        </div>
        <div className="mobile-nav-wrap">
          <div className="mobile-x-btn m-open nav-open-btn">
            <i className="fa-solid fa-equals"></i>
          </div>
          <div className="mobile-nav">
            <div className="menu-btn-wrap">
              <div className="menu-btn">
                <div className="menu-dot"></div>
              </div>
              <div className="menu-btn">
                <i className="fa-solid m-close fa-x"></i>
              </div>
            </div>
            <div className="mobile-nav-menu-li">
              <ul>
                <li>
                  <a href="#o-p">Process</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#plans">Plans</a>
                </li>
                <li>
                  <a href="#contact">
                    Contact{" "}
                    <i className="fa-solid arrow-icon contact-i-mobile single-pink rotate-arrow-icon fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-wrap">
        <div className="bg-animation">
          <div id="stars2"></div>
          <div id="stars4"></div>
        </div>
      </div>
      <div className="one">
        <div className="two">
          <div className="three"></div>
        </div>
      </div>
      <div className="a">
        <div className="b">
          <div className="c"></div>
        </div>
      </div>
      <div className="aa">
        <div className="bb">
          <div className="cc"></div>
        </div>
      </div>
      <div className="container-fluid center-container">
        <div>
          <h1 className="text-center">
            Driving growth with <span className="lime-green-text">AI.</span>
          </h1>
          <p className="text-center mt-4 top-title-p">
            We craft workflow automations and bespoke AI solutions for
            forward-thinking companies.
          </p>
          <div className="top-btn-div">
            <button>
              <a href="#services">
                <div className="p-top-btn">
                  <p>Our services</p>
                  <p className="">Our services</p>
                </div>
              </a>
            </button>
            <button>
              <a href="#contact">
                <div className="p-top-btn">
                  <p>
                    Get in touch{" "}
                    <i className="fa-solid arrow-icon rotate-arrow-icon fa-arrow-right"></i>
                  </p>
                  <p className="">
                    Get in touch{" "}
                    <i className="fa-solid arrow-icon fa-arrow-right"></i>
                  </p>
                </div>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
