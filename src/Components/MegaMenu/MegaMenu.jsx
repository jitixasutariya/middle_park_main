import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  background: linear-gradient(
    to right,
    #0099cc,
    #1ac6ff
  ); // Gradient from #0099cc to #1ac6ff
  padding-left: 220px;
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
`;

const Arrow = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
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
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const MenuColumn = styled.div`
  width: 25%;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    margin-top: 0;
    color: white;
  }
`;

const MenuLink = styled(NavLink)`
  display: block;
  padding: 10px 0;
  color: white;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
    color: black;
  }
`;

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const handleMenuClick = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MenuContainer ref={menuRef}>
      <MenuButton onClick={() => handleMenuClick("home")}>Home</MenuButton>

      <MenuButton onClick={() => handleMenuClick("school")}>
        Our School
        <Arrow isOpen={activeMenu === "school"} />
      </MenuButton>
      {activeMenu === "school" && (
        <MegaMenuContainer isOpen={activeMenu === "school"}>
          <MenuColumn>
            <h3>Section 1</h3>
            <MenuLink to="/link1">Link 1</MenuLink>
            <MenuLink to="/link2">Link 2</MenuLink>
          </MenuColumn>
          <MenuColumn>
            <h3>Section 2</h3>
            <MenuLink to="/link3">Link 3</MenuLink>
            <MenuLink to="/link4">Link 4</MenuLink>
          </MenuColumn>
          {/* Add more columns if needed */}
        </MegaMenuContainer>
      )}

      <MenuButton onClick={() => handleMenuClick("partners")}>
        For Partners
        <Arrow isOpen={activeMenu === "partners"} />
      </MenuButton>
      {activeMenu === "partners" && (
        <MegaMenuContainer isOpen={activeMenu === "partners"}>
          <MenuColumn>
            <h3>Partners Section 1</h3>
            <MenuLink to="/partner-link1">Partner Link 1</MenuLink>
            <MenuLink to="/partner-link2">Partner Link 2</MenuLink>
          </MenuColumn>
          {/* Add more columns if needed */}
        </MegaMenuContainer>
      )}

      <MenuButton onClick={() => handleMenuClick("enrol")}>Enrol</MenuButton>
      <MenuButton onClick={() => handleMenuClick("music")}>Music</MenuButton>
      <MenuButton onClick={() => handleMenuClick("calendar")}>
        Calendar
      </MenuButton>
      <MenuButton onClick={() => handleMenuClick("contact")}>
        Contact Us
        <Arrow isOpen={activeMenu === "contact"} />
      </MenuButton>
      {activeMenu === "contact" && (
        <MegaMenuContainer isOpen={activeMenu === "contact"}>
          <MenuColumn>
            <h3>Contact Section 1</h3>
            <MenuLink to="/contact-link1">Contact Link 1</MenuLink>
            <MenuLink to="/contact-link2">Contact Link 2</MenuLink>
          </MenuColumn>
          {/* Add more columns if needed */}
        </MegaMenuContainer>
      )}
    </MenuContainer>
  );
};

export default MegaMenu;
