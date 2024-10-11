"use client"
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles
import $ from 'jquery'; // Make sure jQuery is installed
import Footer from "@/component/Footer"
import Navbar from "@/component/Navbar";
export default function Home() {
  const [navActive, setNavActive] = useState(false);
  const loaderRef = useRef(null);
  const cursorFollowerDotRef = useRef(null);
  
  // Loader effect
  useEffect(() => {
    const handleLoad = () => {
      $('.loader-slide').addClass('open');
      updateZIndexById();
    };

    const updateZIndexById = () => {
      setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.style.zIndex = -1;
        }
      }, 2500);
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const section2Top = $('.second-section').offset().top;
      const scrollPosition = $(window).scrollTop();
      if (scrollPosition >= section2Top) {
        $('.nav').addClass('fixed');
      } else {
        $('.nav').removeClass('fixed');
      }
    };

    $(window).on('scroll', handleScroll);
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []);

  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 50,
    });
  });

  // Cursor Follower
  useEffect(() => {
    let xpDot = 0, mouseX = 0, ypDot = 0, mouseY = 0;
    const cursorFollowerDot = cursorFollowerDotRef.current;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(() => {
      xpDot += (mouseX - xpDot) / 10;
      ypDot += (mouseY - ypDot) / 10;
      if (cursorFollowerDot) {
        cursorFollowerDot.style.left = xpDot + "px";
        cursorFollowerDot.style.top = ypDot + "px";
      }
    }, 20);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  // Mobile Navigation
  const toggleMobileNav = () => {
    setNavActive(!navActive);
  };

  // Image Dropdown
  const toggleDropdown = (index) => {
    const item = document.querySelector(`.our-work-item${index}`);
    const pTag = item.nextElementSibling;
    const icon = item.querySelector('i');
    const icon2 = item.querySelector('.faq-icon-rotate');

    if (pTag) {
      pTag.classList.toggle('open');
      icon.classList.toggle('rotate');
      icon2.classList.toggle('rotate1');
    }
  };
  return (
    <>
      <div id="loader">
        <div
          className="loader-slide inline-loader"
          style={{
            display: "flex",
            "justifyContent": "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            className="slide-up inline-slide"
            style={{
              display: "flex",
              alignItems: "center",
              transform: "translateY(100%)",
            }}
          >
            <div
              className="loader-dot inline-dot"
              style={{
                width:  "50px",
                height:"50px",
                borderRadius: "50%",
                marginTop: "1rem",
              }}
            ></div>
            <div
              className="loader-h1 inline-loader-h1"
              style={{
                position: "relative",
                marginLeft: "20px",
                fontSize: "5em",
                color: "grey",
              }}
            >
              <span
                className="text-fill inline-text-fill"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: 0,
                  color: "white",
                  animation: "fillText 2s forwards",
                }}
              >
                minting minds
              </span>
              <span>minting minds</span>
            </div>
          </div>
        </div>
      </div>

      <div id="app">
        <span id="cursorFollowerDot" className="cursorFollowerDot"></span>

        <div>
          <div className="main-wrap">
            {/* <section className="top-header-section">
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
                    Driving growth with{" "}
                    <span className="lime-green-text">AI.</span>
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
            </section> */}
            <Navbar />
            <section className="second-section">
              <div className="container text-center">
                <div className="desktop-span">
                  <span
                    className="text-fill2 span1 inline-text-fill-2"
                     style={{position: "absolute", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "9rem"}}
                  >
                    We're
                  </span>
                  <span className="inline-span" 
                   style={{color: "#3f3f3f"}}
                  >We're </span>
                  <span
                    className="text-fill2 text-fill3 span2 inline-text-fill-3"
                     style={{position: "absolute", whiteSpace: "nowrap", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "23rem"}}
                  >
                    minting minds.
                  </span>
                  <span className="inline-span"  
                  // style={{color: "#3f3f3f"}}
                  >minting minds.</span>
                  <span
                    className="text-fill2 span3 inline-text-fill-4"
                    // style={{position: "absolute" ,whiteSpace: "nowrap", overflow: "hidden", maxWidth: "34.5rem"}}
                  >
                    We develop custom AI
                  </span>
                  <span className="mobile-span inline-span" 
                  style={{color: "#3f3f3f"}}
                  >
                    We develop custom AI
                  </span>
                  <span 
                  // style={{color: "#3f3f3f"}}
                  className="inline-span"  
                  >We develop custom AI</span>
                  <br />
                  <span
                    className="text-fill2 span4 inline-text-fill-5"
                    // style={{position: "absolute", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "54.4rem"}}
                  >
                    solutions for innovative companies.
                  </span>
                  <span
                  className="inline-span" 
                  //  style={{color: "#3f3f3f"}}
                   >
                    solutions for innovative companies.
                  </span>
                </div>
                <div className="mobile-span-wrap">
                  <span
                    className="text-fill2 m-span1 inline-text-fill-6"
                    // style={{position: "absolute", whiteSpace: "nowrap" ,overflow: "hidden", maxWidth: "9rem"}}
                  >
                    We're
                  </span>
                  <span 
                  // style={{color: "#3f3f3f"}}
                  className="inline-span" 
                  >We're </span>
                  <span
                    className="text-fill2 text-fill3 m-span2 inline-text-fill-7"
                    // style={{position: "absolute", whiteSpace: "nowrap", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "23rem"}}
                  >
                    minting minds.
                  </span>
                  <span 
                  // style={{color: "#3f3f3f"}}
                  className="inline-span"
                  >minting minds.</span>
                  <br />
                  <span
                    className="text-fill2 m-span3"
                    style={{position: "absolute", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "35.5rem"}}
                  >
                    We develop custom AI.
                  </span>
                  <span className="mobile-span" style={{color: "#3f3f3f"}}>
                    We develop custom AI
                  </span>
                  <span style={{color: "#3f3f3f"}}>We develop custom AI</span>
                  <br />
                  <span
                    className="text-fill2 m-span4"
                    style={{position: "absolute", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "54.4rem"}}
                  >
                    solutions for innovative
                  </span>
                  <span style={{color: "#3f3f3f"}}>solutions for innovative</span>
                  <br />
                  <span
                    className="text-fill2 m-span5"
                    style={{position: "absolute", whiteSpace: "nowrap", overflow: "hidden", maxWidth: "54.4rem"}}
                  >
                    companies.
                  </span>
                  <span style={{color: "#3f3f3f"}}>companies.</span>
                </div>
              </div>
            </section>
            <section id="o-p" className="our-process">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="title"
              >
                Our <span className="lime-green-text">Process</span>
              </h1>
              <div className="container-fluid process-container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1700"
                  className="col-lg-4 process-item1"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 fpb first-process-b">
                      <div className="process-box-wrap2">
                        <div className="process-box-item1">
                          <div className="content-flex">
                            <div className="toggle">
                              <input type="checkbox" id="check-60" />
                              <label htmlFor="check-60"></label>
                            </div>
                            <p>Subscription</p>
                          </div>
                        </div>
                        <div className="process-box-item2 mt-4">
                          <div className="sub-box-wrap">
                            <div className="sub-box">
                              <p>Basic</p>
                            </div>
                            <div className="sub-box pro">
                              <p>Pro</p>
                            </div>
                            <div className="sub-box">
                              <p>Custom</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box process-text-boxx">
                      <h1>
                        <span className="lime-green-text">01.</span>
                        <span className="ps-2">Subscribe</span>
                      </h1>
                      <p>
                        Choose your preferred plan to start and cancel or pause
                        at anytime you like. So you're as flexible as your
                        business' needs
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  className="col-lg-4 process-item2"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 first-process-b">
                      <div id="gallery2" className="social-wrap">
                        <div className="social-icon-div">
                          <img
                            className="zoho"
                            src="/images/freshdesk.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="zoho"
                            src="images/zoho-white.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="sap"
                            src="images/sap-logo.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="service-now"
                            src="images/service-now.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="amazon"
                            src="images/amazon.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img src="images/stripe.avif" alt="" />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="razor"
                            src="images/razor.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div
                        id="gallery3"
                        className="social-wrap social-wrap2 mt-4"
                      >
                        <div className="social-icon-div">
                          <img
                            className="zoho"
                            src="images/freshdesk.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="zoho"
                            src="images/zoho-white.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="sap"
                            src="images/sap-logo.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="service-now"
                            src="images/service-now.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="amazon"
                            src="images/amazon.png"
                            alt=""
                          />
                        </div>
                        <div className="social-icon-div">
                          <img src="images/stripe.avif" alt="" />
                        </div>
                        <div className="social-icon-div">
                          <img
                            className="razor"
                            src="images/razor.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box process-text-boxx ">
                      <h1>
                        <span className="lime-green-text">02.</span>
                        <span className="ps-2">Request</span>
                      </h1>
                      <p>
                        Start requesting the workflow-automations and AI
                        applications you need, your developers are right there
                        to transform your ideas into reality.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1700"
                  className="col-lg-4 process-item3"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 first-process-b first-code">
                      <div className="code-div">
                        <div className="mint-text-div">
                          <p className="mint-text">
                            FeatureSection &rcub; from 'minting-minds';
                          </p>
                          <p className="mint-text">
                            {" "}
                            const App = () =&gt; &lcub;{" "}
                          </p>
                          <p className="mint-text"> return (</p>
                          <p className="mint-text"> &lt;div&gt;</p>
                          <p className="mint-text"> &lt;Header /&gt;</p>
                          <p className="mint-text"> &lt;HeroSection /&gt;</p>
                          <p className="mint-text"> &lt;FeatureSection /&gt;</p>
                          <p className="mint-text"> &lt;Footer /&gt;</p>
                          <p className="mint-text"> &lt;/div&gt;</p>
                          <p className="mint-text"> );</p>
                          <p className="mint-text"> &lcub;</p>
                          <p className="mint-text"> export default App;</p>
                          <p className="mint-text"> ``'</p>
                          <p className="mint-text">
                            import React from 'react';
                          </p>
                          <p className="mint-text">
                            import &rcub Header, Footer, HeroSection,
                            FeatureSection &lcub from 'minting-minds';
                          </p>
                          <p className="mint-text">
                            const App = () =&gt; &lcub;
                          </p>
                          <p className="mint-text"> return (</p>
                          <p className="mint-text"> &lt;div&gt;</p>
                          <p className="mint-text"> &lt;Header /&gt;</p>
                          <p className="mint-text"> &lt;HeroSection </p>
                          <p className="mint-text">
                            {" "}
                            title="Welcome to minting minds"
                          </p>
                          <p className="mint-text">
                            {" "}
                            subtitle="A modern website template for showcasing
                            your content"
                          </p>
                          <p className="mint-text"> buttonLabel="Learn More"</p>
                          <p className="mint-text"> buttonLink="/about'</p>
                        </div>
                        <div className="code-cursor-img">
                          <div className="cursor-div">
                            <i className="fa-solid pink-icons fa-magnifying-glass"></i>
                          </div>
                        </div>
                        {/* <!-- <div className="code-bagde-name">
                                            <p>Tibor B</p>
                                        </div> --> */}
                      </div>
                    </div>
                    <div className="process-text-box process-text-boxx">
                      <h1>
                        <span className="lime-green-text">03.</span>
                        <span className="ps-2">Build</span>
                      </h1>
                      <p>
                        Our developers swiftly begin building your custom
                        solutions, prioritising speed without compromising on
                        quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid process-container">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="col-lg-6 process-item1"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2">
                      <div className="process-box-wrap2 process-bar-div">
                        <div className="move-bar-wrap">
                          <p>Speed</p>
                          <div className="move-bar move-bar1">
                            <div className="move-inner-bar"></div>
                          </div>
                        </div>
                        <div className="mt-3 move-bar-wrap">
                          <p>Security</p>
                          <div className="move-bar move-bar2">
                            <div className="move-inner-bar move-inner-bar2"></div>
                          </div>
                        </div>
                        <div className="mt-3 move-bar-wrap">
                          <p>Accuracy</p>
                          <div className="move-bar move-ba3">
                            <div className="move-inner-bar move-inner-bar3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box process-text-boxx">
                      <h1>
                        <span className="lime-green-text">04.</span>
                        <span className="ps-2">Test & optimise</span>
                      </h1>
                      <p>
                        You either approve or request revisions - we're
                        dedicated to refining our builds until you're fully
                        satisfied.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  className="col-lg-6 process-item1"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 globe-div">
                      <canvas
                        id="cobe"
                        style={{width: "500px", height: "500px"}}
                        width="1000"
                        height="1000"
                      ></canvas>
                    </div>
                    <div className="process-text-box process-text-boxx mt-5">
                      <h1>
                        <span className="lime-green-text">05.</span>
                        <span className="ps-2">Become an industry leader</span>
                      </h1>
                      <p>
                        Continue requesting as many workflow-automations and
                        AI-applications as you wish, and transform your
                        organisation into a worldwide industry leader.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="services" className="our-process our-services">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                className="title"
              >
                Our <span className="lime-green-text">services</span>
              </h1>
              <div className="container-fluid process-container">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1950"
                  className="col-lg-4 process-item1"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 process-box-mint">
                      <div className="process-box-wrap2">
                        <div className="process-box-item1">
                          <div className="content-flex mint-wrap">
                            <div className="mint-div">
                              <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                              <p className="single-pink">Email</p>
                              <p>
                                The user submits an enquiry via email to the
                                service desk.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="plus-mint-wrap">
                          <div className="plus-mint-div">
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        </div>
                        <div className="process-box-item1 mt-2">
                          <div className="content-flex mint-wrap">
                            <div className="mint-div">
                              {/* <!-- <i className="fa-solid fa-headphones-simple"></i> --> */}
                              <img src="images/freshdesk.png" alt="" />
                            </div>
                            <div>
                              <p className="single-pink">Service desk</p>
                              <p>
                                The service desk generates a ticket and assigns
                                it to AI agent for processing.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="plus-mint-wrap">
                          <div className="plus-mint-div">
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        </div>
                        <div className="process-box-item1 mt-2">
                          <div className="content-flex mint-wrap">
                            <div className="mint-div">
                              <img src="images/icon-chat-bot.png" />
                            </div>
                            <div>
                              <p className="single-pink">AI Agent</p>
                              <p>
                                The AI agent processes the ticket and responds
                                to the user's enquiry.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box p-t-b">
                      <h1>Workflow automations</h1>
                      <p>
                        We automate your workflows by connecting your favourite
                        applications. Boosting efficiency and enhancing
                        productivity.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="2950"
                  className="col-lg-4 process-item2"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 chat-process">
                      <div className="chat-area">
                        <div className="chat-area-wrap">
                          <div>
                            <div className="content-flex mint-wrap mint-wrap1">
                              <div className="mint-div">
                                <img
                                  className="user"
                                  src="images/red-user.png"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p className="single-pink text-end p1">
                                  Faiz Khandwani
                                </p>
                                <p className="p2">Summarize this report</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-5">
                            <div className="content-flex mint-wrap mint-wrap2">
                              <div className="mint-flex">
                                <div className="mint-div">
                                  <p>AI</p>
                                </div>
                                <div className="p-area">
                                  <p className="single-pink p1">AI assistant</p>
                                  <p className="p2">Sure, here's a summary:</p>
                                </div>
                              </div>
                              <div className="d-p-wrap">
                                <p className="d-p">
                                  Quokka BV experienced a 15%
                                </p>
                                <p className="d-p">
                                  increase in revenue to €120 million
                                </p>
                                <p className="d-p">from the previous year's…</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-input">
                        <div className="attach">
                          <i className="fa-solid fa-paperclip"></i>
                        </div>
                        <div className="send">
                          <i className="fa-regular single-pink fa-paper-plane"></i>
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box chat-text-box">
                      <h1>Chatbot development</h1>
                      <p>
                        We develop advanced chatbots that are reactive,
                        understand nuances, and are capable of solving extremely
                        complicated queries.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="2950"
                  className="col-lg-4 process-item3"
                >
                  <div className="process-box-wrap">
                    <div className="process-box2 graph-process-box">
                      <div className="code-div chart-div">
                        <svg
                          className="img2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 355 235"
                        >
                          {/* Your SVG elements for img2 */}
                          <g
                            transform="translate(0 82.859)"
                            id="ss9336997798_1"
                          >
                            <defs>
                              <linearGradient
                                id="idss9336997798_2g1335928327"
                                x1="0.501"
                                x2="0.493"
                                y1="0.578"
                                y2="0"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(11,11,11)"
                                  stopOpacity="1"
                                />
                                <stop
                                  offset="1"
                                  stopColor="#8B45EB"
                                  stopOpacity="1"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0 58.396 ..."
                              fill="url(#idss9336997798_2g1335928327)"
                            />
                            {/* More paths */}
                          </g>
                        </svg>
                        <svg
                          className="img1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 355 235"
                        >
                          {/* Your SVG elements for img1 */}
                          <g
                            transform="translate(0 82.859)"
                            id="ss11974640473_1"
                          >
                            <defs>
                              <linearGradient
                                id="idss11974640473_2g1335928327"
                                x1="0.501"
                                x2="0.493"
                                y1="0.578"
                                y2="0"
                              >
                                <stop
                                  offset="0"
                                  stopColor="rgb(11,11,11)"
                                  stopOpacity="1"
                                />
                                <stop
                                  offset="1"
                                  stopColor="#8B45EB"
                                  stopOpacity="1"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d="M 0 58.396 ..."
                              fill="url(#idss11974640473_2g1335928327)"
                            />
                            {/* More paths */}
                          </g>
                        </svg>
                        F
                        <div className="chart-percent-div">
                          <p>+15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="process-text-box p-t-b">
                      <h1>AI consulting</h1>
                      <p>
                        Using our expertise, we delve deep into your
                        organisation and consult you on how AI-driven
                        automations could enhance your operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="work" className="our-work">
              <div className="container-fluid">
                <h1
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  className="title"
                >
                  Minds we have <span className="lime-green-text">Minted</span>
                </h1>
                <div className="our-work-wrap">
                  <div className="col-lg-5">
                    {/* <!-- <div className="dropdown1">
                                    <div className="our-work-item1">
                                        <div>
                                            <div>
                                                <p className="single-pink">2024</p>
                                            </div>
                                            <div className="our-flex-item mt-3">
                                                <h1 className="dropdown-h1">Travella - Your Ultimate AI Travel Agent</h1>
                                                <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-2 dropdown-p">Travella is your intelligent travel assistant, seamlessly
                                        booking flights, hotels, and packages tailored for your clients. It offers
                                        personalized recommendations and answers all travel queries while crafting
                                        customized itineraries to ensure every trip is memorable. Additionally, Travella
                                        can integrate with your service desk and email systems, providing a dedicated
                                        chatbot for your travel website. Elevate your client experience with Travella
                                        and make travel planning effortless!
                                    </p>
                                </div> --> */}
                    <div className="dropdown2">
                      <div className="our-work-item1 mt-4">
                        <div>
                          <div>
                            <p className="single-pink">2024</p>
                          </div>
                          <div className="our-flex-item mt-3">
                            <h1 className="dropdown-h1">
                              Shoppio - AI-Enhanced Shopping Assistant
                            </h1>
                            <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 dropdown-p">
                        Shoppio is an AI-powered shopping assistant designed to
                        enhance your customers' shopping experience. By offering
                        smart filtering options for features and price, Shoppio
                        helps users quickly find your products that meet their
                        specific needs. With instant access to detailed product
                        information, it transforms the shopping journey,
                        ensuring customer satisfaction and boosting engagement.
                      </p>
                    </div>
                    <div className="dropdown3">
                      <div className="our-work-item1 mt-4">
                        <div>
                          <div>
                            <p className="single-pink">2023</p>
                          </div>
                          <div className="our-flex-item mt-3">
                            <h1 className="dropdown-h1">
                              DocMate - Dialogue with Documents
                            </h1>
                            <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 dropdown-p">
                        DocMate is an AI-powered tool that allows users to
                        upload any document and chat to extract crucial
                        information on the fly. Ideal for commercial, accounts,
                        and legal teams, it streamlines processes like invoice
                        and PO management, while also enabling design and
                        engineering teams to quickly analyze bulky tenders. With
                        DocMate, navigating complex documents becomes seamless,
                        enhancing decision-making and productivity.
                      </p>
                    </div>
                    <div className="dropdown4">
                      <div className="our-work-item1 mt-4">
                        <div>
                          <div>
                            <p className="single-pink">2022</p>
                          </div>
                          <div className="our-flex-item mt-3">
                            <h1 className="dropdown-h1">
                              BizHunt - AI-Powered Opportunity Explorer
                            </h1>
                            <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 dropdown-p">
                        BizHunt is a cutting-edge solution that fuses RPA and AI
                        to streamline your search for business opportunities. It
                        actively scours government and private portals for
                        tenders, identifying those most relevant to your
                        business. With daily notifications of potential leads,
                        BizHunt ensures you have ample time to analyze and
                        prepare for pre-tendering processes, so you never miss
                        out on a valuable opportunity. Empower your bidding
                        strategy and stay ahead of the competition with BizHunt!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 img-col">
                    <div className="img-col-wrap">
                      <video autoPlay="" muted="" loop="">
                        <source
                          src="images/black-logo-video.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      {/* <!-- <img src="images/black-logo-gif.gif" alt=""> --> */}
                    </div>
                    {/* <!-- <div className="img-col-wrap">
                                    <img src="https://mintusercontent.com/images/ECGgyfhiWAP3f8lYXEo3W8q5Y.jpeg?scale-down-to=512"
                                        alt="">
                                </div>
                                <div className="img-col-wrap">
                                    <img src="https://mintusercontent.com/images/cYK8jsG9LU2Eg0kDJPpRChJ3I0.jpeg?scale-down-to=512"
                                        alt="">
                                </div>
                                <div className="img-col-wrap">
                                    <img src="https://mintusercontent.com/images/FtBTCikkRjMCS12d4b8jdRfTs4.jpeg?scale-down-to=512"
                                        alt="">
                                </div> --> */}
                  </div>
                </div>
              </div>
            </section>
            <section id="plans" className="our-plans">
              <div className="container-fluid">
                <h1
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  className="title"
                >
                  <span className="lime-green-text">Plans</span> to suit your
                  needs
                </h1>
                <div className="plans-col-wrap">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1950"
                    className="col-lg-4 plans-col"
                  >
                    <div>
                      <p className="price-p">Basic</p>
                    </div>
                    <div className="plans-price-div">
                      <h1 className="lime-green-text mt-3">$1500</h1>
                      <p className="price-p mt-2">per month</p>
                    </div>
                    <div className="mt-4">
                      <ul className="plans-ul">
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>1 dedicated developer</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Custom workflow automations</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited request</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited revisions</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                          <p className="cut-p">Business consulting</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                          <p className="cut-p">Custom chatbots</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Cancel & pause anytime</p>
                        </li>
                      </ul>
                      <a href="#contact">
                        <div className="plans-btn-div">
                          <button className="plans-btn">
                            <div className="plans-btn-wrap">
                              <span className="pe-3">
                                Get Started with Basics
                              </span>
                              <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                              <div className="mt-2">
                                <span className="pe-3 single-pink">
                                  Get Started with Basics
                                </span>
                                <i className="fa-solid single-pink fa-arrow-right"></i>
                              </div>
                            </div>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2550"
                    className="col-lg-4 plans-col"
                  >
                    <div className="pro-flex">
                      <p className="price-p">Pro</p>
                      <div className="pro-btn">Most Popular</div>
                    </div>
                    <div className="plans-price-div">
                      <h1 className="lime-green-text mt-3">$2800</h1>
                      <p className="price-p mt-2">per month</p>
                    </div>
                    <div className="mt-4">
                      <ul className="plans-ul">
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>2 dedicated developers</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Custom workflow automations</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited requests</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited revisions</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Business consulting</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Custom chatbots</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Cancel & pause anytime</p>
                        </li>
                      </ul>
                      <a href="#contact">
                        <div className="plans-btn-div pro-btn">
                          <button className="plans-btn">
                            <div className="plans-btn-wrap">
                              <span className="pe-3 single-pink">
                                Get Started with Pro
                              </span>
                              <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                              <div className="mt-2">
                                <span className="pe-3 single-pink">
                                  Get Started with Pro
                                </span>
                                <i className="fa-solid single-pink fa-arrow-right"></i>
                              </div>
                            </div>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2550"
                    className="col-lg-4 plans-col"
                  >
                    <div>
                      <p className="price-p">Enterprise</p>
                    </div>
                    <div className="plans-price-div">
                      <h1 className="lime-green-text mt-3">Custom</h1>
                      <p className="price-p mt-2">per month</p>
                    </div>
                    <div className="mt-4">
                      <ul className="plans-ul">
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>X dedicated developers</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Custom workflow automations</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited request</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Unlimited revisions</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p className="">Business consulting</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p className="">Custom chatbots</p>
                        </li>
                        <li>
                          <div className="plans-li-img-div">
                            <i className="fa-solid pink-icons fa-check"></i>
                          </div>
                          <p>Cancel & pause anytime</p>
                        </li>
                      </ul>
                      <a href="#contact">
                        <div className="plans-btn-div ">
                          <button className="plans-btn">
                            <div className="plans-btn-wrap">
                              <span className="pe-3">contact us</span>
                              <i className="fa-solid single-pink rotate-arrow-icon fa-arrow-right"></i>
                              <div className="mt-2">
                                <span className="pe-3 single-pink">
                                  contact us
                                </span>
                                <i className="fa-solid single-pink fa-arrow-right"></i>
                              </div>
                            </div>
                          </button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="client-feedback">
              <div className="container-fluid">
                <h1
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0"
                  className="title"
                >
                  What our <span className="lime-green-text">clients</span> say
                </h1>
              </div>
              <div className="container client-slide-container mt-5"></div>
              <div className="container">
                <div className="owl-carousel owl-theme">
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> Members love the
                        new app with face recognition and easy access to
                        amenities.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client mh-p mid-p">The development process was smooth, and the team was
                                        incredibly
                                        supportive throughout.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/mohit-user.jpg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">
                                            <img src="images/kohinoor.png" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Mohit Karkare</p>
                          <p className="client-bold-p">Director</p>
                          <p className="client-bold-p">Kohinoor City Club</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div company-white">
                          <img
                            className="kk"
                            src="images/kohinoor-full-logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> Our B2B website
                        is now a powerful platform for showcasing products. The
                        Gen-AI chatbot from Minting Minds helps customers easily
                        find the best products, enhancing their overall
                        experience.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p2-client mid-p">The development process was efficient, and the team went
                                        above and
                                        beyond to meet our needs.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/KH-user.jpeg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">
                                            <img src="images/yuri-full-logo.webp" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Khalid Thakur</p>
                          <p className="client-bold-p">Marketing Manager</p>
                          <p className="client-bold-p">Yuri Group</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div  company-white">
                          <img
                            className="k-l"
                            src="images/yuri-full-logo.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> The mobile app
                        has transformed the way our patients access their
                        medical information and interact with our doctors. The
                        development team ensured everything was user-friendly
                        and well-implemented.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client"> The development team ensured everything was user-friendly and
                                        well-implemented.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/men-avatar.jpg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">
                                            <img src="https://mintusercontent.com/images/ZHgUPEBqPHyTg5AhQsMaVzS8c.png"
                                                alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Harish Agnani</p>
                          <p className="client-bold-p">Head of Administrator</p>
                          <p className="client-bold-p">
                            Choitram Memorial Hospital
                          </p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div h-l company-white">
                          <img
                            className="cmh"
                            src="images/cmh-logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> The design and
                        development exceeded our expectations. The team brought
                        creative ideas to the table and delivered a polished
                        final product that truly represents our brand.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client">The final result truly represents our brand and aligns
                                        perfectly
                                        with
                                        our
                                        vision.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/women-avatar.jpg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">
                                            <img src="images/Durian-logo-full.svg" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Varsha Patil</p>
                          <p className="client-bold-p">
                            Manager - Customer Technology
                          </p>
                          <p className="client-bold-p">Durian Furniture</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div d-l">
                          <img src="images/Durian-logo-full.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> Minting Minds has
                        transformed our travel platform with seamless AI
                        integration, boosting efficiency and customer
                        experience. Their innovation has made a big impact, and
                        we look forward to growing our partnership.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client">Their support and innovation have made a significant impact,
                                        and we look forward to growing our partnership.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/fd-user.jpeg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">

                                            <img src="images/favicon-inf.ico" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Fateh Darvesh </p>
                          <p className="client-bold-p">CEO</p>
                          <p className="client-bold-p">Infohybrid</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div">
                          <img src="images/info-full-logo.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> They have been a
                        reliable partner, consistantly providing support as and
                        when required. Their responsiveness and expertise have
                        greatly contributed to our application success.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client">Their support and innovation have made a significant impact,
                                        and we look forward to growing our partnership.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/MJ2-user.jpg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">

                                            <img src="images/favicon-inf.ico" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Manjiri Palav Rane </p>
                          <p className="client-bold-p">DGM - IT & Digital</p>
                          <p className="client-bold-p">L&T PES IC</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div lt-l company-white">
                          <img
                            className="lt"
                            src="images/l&T-logo-full.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-col">
                    <div className="client-col-wrap">
                      <h1>
                        <span className="single-pink">❝</span> Minting Minds has
                        delivered exceptional digital solutions for our company,
                        showcasing expertise in full-stack development, AI, and
                        RPA. Recommended for their collaborative approach and
                        technical prowess.
                        <span className="single-pink">❞</span>
                      </h1>
                      {/* <!-- <p className="p1-client">Their support and innovation have made a significant impact,
                                        and we look forward to growing our partnership.</p> --> */}
                      <div className="client-profile-div mt-4">
                        <div className="client-logo1">
                          <img src="images/NP-user.jpeg" alt="" />
                        </div>
                        {/* <!-- <div className="client-logo2">

                                            <img src="images/favicon-inf.ico" alt="">
                                        </div> --> */}
                        <div className="client-name">
                          <p className="client-bold-p">Nilesh Panchal </p>
                          <p className="client-bold-p">Head - Digital</p>
                          <p className="client-bold-p">KEC International Ltd</p>
                        </div>
                      </div>
                      <div className="client-company-logo">
                        <div className="company-div lt-l company-white">
                          <img
                            className="kec"
                            src="images/kec-logo.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="contact" className="get-in-touch">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
                className="title"
              >
                Get in <span className="lime-green-text">touch</span>
              </h1>
              <div className="container-fluid get-in-container">
                <div className="col-lg-4 mt-5 get-in-wrap">
                  <div className="col-lg-4"></div>
                  <div className="dropdown2">
                    <div className="our-work-item1 mt-4">
                      <div>
                        <div>
                          <p className="small-p">mail</p>
                        </div>
                        <a href="mailto:info@mintingminds.com" target="_blank">
                          <div className="our-flex-item mt-3">
                            <h1 className="dropdown-h1">
                              info@mintingminds.com
                            </h1>
                            <i className="fa-solid single-pink fa-arrow-right get-i"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-4">
                      <div>
                        <div>
                          <p className="small-p">Phone</p>
                        </div>
                        <div className="our-flex-item mt-3">
                          <h1 className="dropdown-h1">
                            <a href="tel:+91 8907078607"> +91 8907078607</a>
                          </h1>
                          <i className="fa-solid single-pink fa-arrow-right get-i"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-4">
                      <div>
                        <div>
                          <p className="small-p">Phone</p>
                        </div>
                        <div className="our-flex-item mt-3">
                          <h1 className="dropdown-h1">
                            <a href="tel:+91 9029607828"> +91 9029607828</a>
                          </h1>
                          <i className="fa-solid single-pink fa-arrow-right get-i"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="form" className="col-lg-7 get-col8">
                  <div className="form-wrap1">
                    <div className="input-wrap1">
                      <p htmlFor="">First Name</p>
                      <input
                        autoComplete="off"
                        id="fName"
                        placeholder="John"
                        type="text"
                      />
                    </div>
                    <div className="input-wrap1">
                      <p htmlFor="">Last Name</p>
                      <input
                        autoComplete="off"
                        id="lName"
                        placeholder="Doe"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-wrap1 mt-4">
                    <div className="input-wrap1">
                      <p htmlFor="">Email</p>
                      <input
                        autoComplete="off"
                        id="email"
                        placeholder="John@example.com"
                        type="email"
                      />
                    </div>
                    <div className="input-wrap1">
                      <p htmlFor="">Phone</p>
                      <input
                        autoComplete="off"
                        id="mob"
                        placeholder="+91 9029607828"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="form-wrap1 mt-4">
                    <div className="input-wrap1">
                      <p htmlFor="">Message</p>
                      <textarea
                        autoComplete="off"
                        id="msg"
                        placeholder=""
                        type="text"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-wrap1 mt-4">
                    <div className="submit-btn-div">
                      <button id="Submit" className="pro-btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="faq">
              <h1
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
                className="title"
              >
                FAQ
              </h1>
              <div className="container-fluid faq-container">
                <div className="col-lg-6 col-sm-12 faq-col mt-3">
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            What is unique about Minting Minds?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      At Minting Minds, we pride ourselves on our
                      customer-centric approach and commitment to innovation. We
                      tailor our AI solutions specifically to each client’s
                      unique challenges, ensuring high-quality results that
                      drive tangible business outcomes. Our experienced team
                      combines expertise in various industries with a passion
                      for leveraging AI to create transformative solutions,
                      making us a trusted partner in your AI journey.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            What services do you offer?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      We specialize in developing custom AI tools tailored to
                      meet the specific needs of your business. Our services
                      include AI consulting, machine learning model development,
                      natural language processing, computer vision, and chatbot
                      solutions.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            How can AI benefit my business?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      AI can enhance operational efficiency, improve
                      decision-making, automate repetitive tasks, and provide
                      valuable insights from data. By implementing AI solutions,
                      businesses can gain a competitive edge and better serve
                      their customers.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            {" "}
                            Do you provide support after implementation?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      Yes, we offer ongoing support and maintenance for all our
                      AI solutions. Our team is dedicated to ensuring your
                      systems run smoothly and effectively, and we are here to
                      assist with any issues or updates.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            What industries do you work with?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      We work with a wide range of industries, including EPC,
                      healthcare, retail, manufacturing, and more. Our goal is
                      to provide customized AI solutions that address the unique
                      challenges of each sector.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 faq-col mt-3">
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            How long does it take to develop an AI tool?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      The timeline for developing an AI tool varies based on the
                      complexity of the project and specific requirements. We
                      work closely with clients to establish a timeline that
                      meets their needs and keeps them informed throughout the
                      development process.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            How do you ensure data security?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      We prioritize data security and privacy. Our team
                      implements industry-standard practices to safeguard your
                      data, and we comply with relevant regulations to ensure
                      your information is handled securely.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            Can you integrate AI solutions with our existing
                            systems?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      Absolutely! We design our AI tools to seamlessly integrate
                      with your existing systems, ensuring a smooth transition
                      and minimizing disruptions to your operations.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">
                            What is your approach to project management?
                          </h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      We follow an agile project management methodology, which
                      allows us to adapt to changing requirements and deliver
                      incremental value throughout the development process. Our
                      team maintains open communication with clients, providing
                      regular updates and opportunities for feedback to ensure
                      alignment with your vision.
                    </p>
                  </div>
                  <div className="dropdown3">
                    <div className="our-work-item1 mt-2">
                      <div>
                        <div className="our-flex-item mt-3">
                          <i className="fa-solid single-pink faq-icon-rotate fa-arrow-right"></i>
                          <h1 className="dropdown-h1">How do I get started?</h1>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 dropdown-p">
                      Getting started is easy! Contact us to schedule a
                      consultation, where we can discuss your business needs and
                      explore how our AI solutions can help you achieve your
                      goals.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
