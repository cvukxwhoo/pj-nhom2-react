import React from "react";
import Header from "../DefaultLayout/Header";
import Footer from "./Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <d>
      <Header />
      <div className="content-container">{children}</div>
      <Footer />
    </d>
  );
};

export default DefaultLayout;
