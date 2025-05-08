import React from "react";
import "../App.css"

const PageLayout = ({ children, fullWidth = false }) => {
  return (
    <div className={fullWidth ? "full-width page-section" : "container page-section"}>
      {children}
    </div>
  );
};

export default PageLayout;