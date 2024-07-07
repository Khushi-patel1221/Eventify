import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className={show ? "navbar showmenu" : "navbar"}>
      <div className="logo">Event Organiser</div>
      <div className="navLinks">
        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
