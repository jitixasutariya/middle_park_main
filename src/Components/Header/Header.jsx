import React from "react";
import logo from "../../Assets/final_logo.png";
import "./Header.css";
import { NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// Header component for the website
const Header = () => {
  return (
    <header className="header">
      {/* Container for the header elements */}
      <div className="header-container">
        {/* Logo section with school logo image */}
        <div className="logo">
          <img src={logo} alt="School Logo" className="school-logo" />
        </div>

        {/* Navigation menu with links to different pages */}
        <div className="menu">
          <NavLink to={"/"}>Home | </NavLink>
          <NavLink to={"/absences"}>Absences | </NavLink>
          <NavLink to={"/contact"}>Contact </NavLink>
        </div>

        {/* Contact information section with phone number and icon */}
        <div className="contact">
          <div className="contact-info">
            <span className="phone-number">(03) 9690 1336</span>
            <span className="school-office">School Office</span>
          </div>
          <div className="contact-icon">
            {/* Phone icon with rotation */}
            <FontAwesomeIcon
              icon={faPhone}
              rotation={270}
              className="phone-icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
