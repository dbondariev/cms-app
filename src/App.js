import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import Tab from "./components/Tab";
import ContentLoader from "./components/ContentLoader";
import { tabs } from "./data/tabs";

import "../src/App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const navigate = useNavigate();
  const location = useLocation();
  const { tabId } = useParams();

  useEffect(() => {
    if (tabId) {
      setActiveTab(tabId);
    }
  }, [tabId]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    navigate(`/${id}`);
  };

  const activeTabObj = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            title={tab.title}
            id={tab.id}
            isActive={tab.id === activeTab}
            onClick={() => handleTabClick(tab.id)}
          />
        ))}
      </div>
      <h1>
        Active Tab: {activeTabObj ? activeTabObj.title : "Unknown"}
        <br />
        Route:{" "}
        {location.pathname.replace("/", "")}
      </h1>
      <div className="content">
        <Routes>
          {tabs.map((tab) => (
            <Route
              key={tab.id}
              path={`/${tab.id}`}
              element={<ContentLoader path={tab.path} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default App;
