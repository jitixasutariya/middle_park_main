import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Add this import
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the icon you need
import Tabs from "../Tab/Tabs";
import { TabData } from "../Tab/TabData";

const slideInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  background: linear-gradient(to right, #0099cc, #1ac6ff);
  padding-left: 220px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding-left: 0;
    flex-direction: column;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  background: none;
  color: white;
  font-size: 28px;
  border: none;
  cursor: pointer;
  padding: 15px;
  margin-left: auto;
  width: 100%;

  .humburgerIcon {
    float: right;
    font-size: 60px;
    font-weight: 900;
    color: white;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerText = styled.span`
  display: inline-block;
  width: 100%;
  text-align: left;
  color: #d9ff36;
  font-size: 36px;
  font-weight: 600;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const MenuButton = styled.button`
  background: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 15px 30px;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;

  &:hover {
    background: #007bb5;
    color: #ffffff;
  }

  .menu-icon {
    margin-left: 8px;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px 25px;
  }
`;

const MegaMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 10%;
  width: 75vw;
  background: #2c3e50;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.95)"};
  transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;

  ${({ isOpen, animationType }) => {
    switch (animationType) {
      case "slideInFromTop":
        return isOpen
          ? css`
              animation: ${slideInFromTop} 0.5s ease forwards;
            `
          : null;
      default:
        return null;
    }
  }};

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    box-shadow: none;
    transform: translateY(0);
  }
`;

const MenuRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MenuColumn = styled.div`
  width: 25%;
  padding: 50px 40px;
  box-sizing: border-box;

  h3 {
    margin-top: 0;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const MenuLink = styled(NavLink)`
  display: block;
  padding: 3px 0;
  color: #0099cc;
  text-decoration: none;
  font-size: 18px;

  .menu-icon-arrow {
    color: grey;
  }

  &:hover {
    color: #1ac6ff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 10px 25px;
  }
`;

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MenuContainer ref={menuRef}>
      <HamburgerMenu onClick={toggleMenu}>
        <HamburgerText>
          Menu
          <FontAwesomeIcon
            icon={faBars}
            rotation={90}
            className="humburgerIcon"
          />
          {/* <FaBars  rotation={90} /> */}
        </HamburgerText>
      </HamburgerMenu>
      <MenuItems isOpen={isMenuOpen}>
        <MenuButton onClick={() => handleMenuClick("home")}>Home</MenuButton>

        <MenuButton
          onClick={() => handleMenuClick("school")}
          aria-expanded={activeMenu === "school"}
          aria-controls="school-menu"
        >
          Our School
          <IoIosArrowDown className="menu-icon" />
        </MenuButton>
        <MegaMenuContainer
          id="school-menu"
          isOpen={activeMenu === "school"}
          animationType="slideInFromTop"
        >
          <MenuRow>
            <MenuColumn>
              <h3>Quick links</h3>
              <MenuLink to="/" onClick={() => setIsMenuOpen(false)}>
                <BiSolidRightArrowAlt className="menu-icon-arrow" />
                Home
              </MenuLink>
              <MenuLink to="/curriculum" onClick={() => setIsMenuOpen(false)}>
                <BiSolidRightArrowAlt className="menu-icon-arrow" />
                Curriculum
              </MenuLink>
              <MenuLink to="/policies" onClick={() => setIsMenuOpen(false)}>
                <BiSolidRightArrowAlt className="menu-icon-arrow" />
                Policies
              </MenuLink>
              <MenuLink to="/newsletter" onClick={() => setIsMenuOpen(false)}>
                <BiSolidRightArrowAlt className="menu-icon-arrow" />
                Newsletter
              </MenuLink>
              <MenuLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                <BiSolidRightArrowAlt className="menu-icon-arrow" />
                Contact us
              </MenuLink>
            </MenuColumn>
            <MenuColumn>
              <Tabs tabs={TabData} />
            </MenuColumn>
          </MenuRow>
        </MegaMenuContainer>

        <MenuButton
          onClick={() => handleMenuClick("partners")}
          aria-expanded={activeMenu === "partners"}
          aria-controls="partners-menu"
        >
          For Partners
          <IoIosArrowDown className="menu-icon" />
        </MenuButton>
        <MegaMenuContainer
          id="partners-menu"
          isOpen={activeMenu === "partners"}
          animationType="slideInFromTop"
        >
          <MenuColumn>
            <h3>Partners Section 1</h3>
            <MenuLink to="/partner-link1" onClick={() => setIsMenuOpen(false)}>
              Partner Link 1
            </MenuLink>
            <MenuLink to="/partner-link2" onClick={() => setIsMenuOpen(false)}>
              Partner Link 2
            </MenuLink>
          </MenuColumn>
        </MegaMenuContainer>

        <MenuButton onClick={() => handleMenuClick("enrol")}>Enrol</MenuButton>
        <MenuButton onClick={() => handleMenuClick("music")}>Music</MenuButton>
        <MenuButton onClick={() => handleMenuClick("calendar")}>
          Calendar
        </MenuButton>
        <MenuButton
          onClick={() => handleMenuClick("contact")}
          aria-expanded={activeMenu === "contact"}
          aria-controls="contact-menu"
        >
          Contact Us
          <IoIosArrowDown className="menu-icon" />
        </MenuButton>
        <MegaMenuContainer
          id="contact-menu"
          isOpen={activeMenu === "contact"}
          animationType="slideInFromTop"
        >
          <MenuColumn>
            <h3>Contact Section 1</h3>
            <MenuLink to="/contact-link1" onClick={() => setIsMenuOpen(false)}>
              Contact Link 1
            </MenuLink>
            <MenuLink to="/contact-link2" onClick={() => setIsMenuOpen(false)}>
              Contact Link 2
            </MenuLink>
          </MenuColumn>
        </MegaMenuContainer>
      </MenuItems>
    </MenuContainer>
  );
};

export default MegaMenu;
