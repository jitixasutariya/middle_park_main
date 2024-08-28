import React from "react";
import logo from "../../Assets/final_logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom"; // Updated import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to={"/"} className="nav-link">
            <img src={logo} alt="School Logo" className="school-logo" />
          </NavLink>
        </div>
        <div className="menu">
          <NavLink to={"/"} className="nav-link">
            Home |
          </NavLink>

          <NavLink to={"/absences"} className="nav-link">
            Absences |
          </NavLink>

          <NavLink to={"/contact"} className="nav-link">
            Contact
          </NavLink>
        </div>
        <div className="contact">
          <div className="contact-info">
            <span className="phone-number">(03) 9690 1336</span>
            <span className="school-office">School Office</span>
          </div>
          <div className="contact-icon">
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
