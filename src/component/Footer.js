import React from 'react'

const Footer = () => {
  return (
    <div className="footer-wrap">
<footer>
  <div className="container-fluid">
    <div className="footer-text-flex">
      <h1
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="500"
        data-aos-offset="0"
        className="title"
      >
        Let's talk.
      </h1>
      <a href="mailto:info@mintingminds.com" target="_blank">
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="500"
          data-aos-offset="0"
          className="title footer-mail-text"
        >
          info<span className="lime-green-text">@</span>
          mingtingminds.com
        </p>
      </a>
    </div>
    <div className="pt-4 footer-ul-flex">
      <div>
        <ul>
          <li className="single-pink">© 2024 All Right Reserved</li>
          <a href="tel:+91 8907078607">
            <li className="text-white tel-i pt-1">+91 8907078607</li>
          </a>
          <a href="tel:+91 9029607828">
            <li className="text-white tel-i pt-1">+91 9029607828</li>
          </a>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-white">
            <a href="#o-p">Process</a>
          </li>
          <li className="text-white pt-1">
            <a href="#services">Services</a>
          </li>
          <li className="text-white pt-1">
            <a href="#work">Work</a>
          </li>
          <li className="text-white pt-1">
            <a href="#plans">Plans</a>
          </li>
          <li className="text-white footer-li-i pt-1">
            <a href="#contact">Contact</a>{" "}
            <i className="fa-solid single-pink contact-footer-i rotate-arrow-icon fa-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-white pt-1">
            <a
              href="https://www.linkedin.com/company/minting-minds/about/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>&emsp;LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
  )
}

export default Footer