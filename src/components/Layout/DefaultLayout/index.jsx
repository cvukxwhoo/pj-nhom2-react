import React from "react";
import Header from "../DefaultLayout/Header";
import Footer from "./Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
