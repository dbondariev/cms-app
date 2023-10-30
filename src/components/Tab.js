import React from "react";

const Tab = ({ title, id, isActive, onClick }) => {
  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      onClick={() => onClick(id)}
    >
      {title}
    </div>
  );
};

export default Tab;
