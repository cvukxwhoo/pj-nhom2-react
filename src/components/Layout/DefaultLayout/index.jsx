import React from "react";
import Header from "../DefaultLayout/Header";
import ScrollToTop from "./BoxHome/components/ScrollToTop/ScrollToTop";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content-container">{children}</div>
      <ScrollToTop />
    </div>
  );
};

export default DefaultLayout;
