import React, { useState } from "react";
import styled from "styled-components";

// Styled components for Tabs
const TabsContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const Tab = styled.div`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-bottom: none;
  background: ${({ active }) => (active ? "#f9f9f9" : "#fff")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-radius: 4px 4px 0 0;
  margin-right: 2px;
  &:last-child {
    margin-right: 0;
  }
`;

const TabContent = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  background: #fff;
  border-radius: 0 0 4px 4px;
`;

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

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
      <TabContent>{activeTabContent}</TabContent>
    </div>
  );
};

export default Tabs;
