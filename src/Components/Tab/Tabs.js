import React, { useState } from "react";
import styled from "styled-components";

// Styled components for Tabs
const TabsContainer = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0; /* Remove any default margin */
  padding: 0; /* Remove any default padding */

  @media (max-width: 480px) {
    flex-direction: column; /* Stack tabs vertically on very small screens */
    align-items: stretch; /* Ensure tabs take up full width */
  }
`;

const Tab = styled.div`
  flex: 1 1 auto; /* Allow tabs to grow and shrink */
  padding: 12px 25px; /* Adjust padding */
  border: 1px solid #424952;
  border-bottom: none;
  background: ${({ active }) => (active ? "#0099cc" : "#424952")};
  font-weight: bold;
  font-size: 20px;
  color: ${({ active }) => (active ? "#fff" : "#ccc")};
  border-radius: 4px 4px 0 0;
  margin-right: 10px;
  margin-bottom: -1px; /* Prevent double borders */
  box-sizing: border-box; /* Include padding and border in element's total width and height */
  text-align: center;
  white-space: nowrap; /* Prevent wrapping */
  transition: background 0.3s ease, color 0.3s ease, transform 0.4s ease;

  &:hover {
    background: #007bb5;
    color: #ffffff;
    transform: scale(1.05); /* Adds a slight scale effect */
  }

  @media (max-width: 1024px) {
    font-size: 18px; /* Adjust font size for smaller screens */
    padding: 10px; /* Adjust padding for smaller screens */
    white-space: normal; /* Allow wrapping */
    margin-right: 5px; /* Reduce margin for smaller screens */
  }

  @media (max-width: 768px) {
    font-size: 16px; /* Further adjust font size */
    padding: 8px; /* Further adjust padding */
    margin-right: 5px; /* Further reduce margin */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Further reduce font size */
    padding: 6px; /* Further reduce padding */
    margin-right: 0; /* Remove margin on stacked tabs */
    margin-bottom: 5px; /* Add space between stacked tabs */
    text-align: left; /* Align text to the left */
    border-radius: 4px; /* Adjust border radius for stacked tabs */
    display: flex; /* Stack tabs vertically */
    width: 100%; /* Ensure full width for each tab */
    justify-content: center; /* Center text within the tab */
  }

  @media (max-width: 320px) {
    font-size: 12px; /* Minimum font size */
    padding: 4px; /* Minimum padding */
  }
`;

const TabContent = styled.div`
  color: #fff;
  padding: 20px;
  font-size: 24px;
  width: 100vw;
  max-width: 1200px; /* Set a max-width for large screens */
  margin: 0 auto; /* Center content horizontally */

  @media (max-width: 1024px) {
    max-width: 800px; /* Adjust max-width for tablets */
    font-size: 22px;
  }

  @media (max-width: 768px) {
    max-width: 600px; /* Adjust max-width for mobile devices */
    font-size: 22px;
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Allow full width for very small screens */
    padding: 10px; /* Adjust padding for smaller screens */
    font-size: 18px; /* Adjust font size */
  }
`;

const StyledHr = styled.hr`
  border: 2px solid white;
  margin: 0; /* Adjust margin as needed */
  width: 52vw; /* Ensure full width */
  margin: 0 auto; /* Center horizontally */

  @media (max-width: 1024px) {
    width: 52vw; /* Ensure full width */
  }

  @media (max-width: 768px) {
    width: 52vw; /* Ensure full width */
  }

  @media (max-width: 480px) {
    width: 52vw; /* Ensure full width */
  }
`;

const Tabs = ({ tabs }) => {
  // Initialize state with the first tab's id
  const [activeTab, setActiveTab] = useState(
    tabs.length > 0 ? tabs[0].id : null
  );

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  // Find the content of the active tab
  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            active={tab.id === activeTab}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      <StyledHr />
      <TabContent>{activeTabContent}</TabContent>
    </div>
  );
};

export default Tabs;
