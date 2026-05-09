import React, { useState } from "react";

function Navigate() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={"aside " + (navOpen ? "open" : "")}>
      <div className="logo">
        <a href="#Home" className="home-btn">
          <span>L</span>ê
          <span> H</span>oàng
          <span> H</span>uy
        </a>
      </div>
      <div className="social-icons">
        <a href="mailto:hoanghuy192004@gmail.com" rel="noopener noreferrer">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="https://github.com/NamelessIT" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ho%C3%A0ng-huy-l%C3%AA-6a03a4363/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className={`nav-toggler ${navOpen ? "open" : ""}`} onClick={toggleNav}>
        <span></span>
      </div>

      <ul className="nav">
        <li>
          <a href="#Home" onClick={toggleNav}>
            <i className="fa fa-home"></i>Home
          </a>
        </li>
        <li>
          <a href="#About" onClick={toggleNav}>
            <i className="fa fa-user"></i>About
          </a>
        </li>
        <li>
          <a href="#Education" onClick={toggleNav}>
            <i className="fa fa-school"></i>Education
          </a>
        </li>
        <li>
          <a href="#Projects" onClick={toggleNav}>
            <i className="fa fa-briefcase"></i>Projects
          </a>
        </li>
        <li>
          <a href="#Contact" onClick={toggleNav}>
            <i className="fa fa-envelope"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigate;
