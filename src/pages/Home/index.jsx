// eslint-disable-next-line no-unused-vars
import React from "react";
import BoxHome from "../../components/Layout/DefaultLayout/BoxHome/BoxHome";
import BoxAdventure from "./BoxAdventure/BoxAdventure";
import BoxTour from "./BoxTour/BoxTour";

const Home = () => {
  return (
    <>
      <BoxHome />
      <BoxAdventure />
      <BoxTour />
    </>
  );
};

export default Home;
