import React from "react";

const MainContent = ({ children }) => {
  return (
    <div className="ml-64">
      <div className="min-h-screen bg-base-100">{children}</div>
    </div>
  );
};

export default MainContent;
