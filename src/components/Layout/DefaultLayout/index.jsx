import React from "react";
import Header from "../DefaultLayout/Header";
import Footer from "./Footer/Footer";
import BoxHome from "./BoxHome/BoxHome";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BoxHome />
      <div className="content-container">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
