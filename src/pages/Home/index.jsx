// eslint-disable-next-line no-unused-vars
import React from "react";
import BoxAdventure from "./BoxAdventure/BoxAdventure";
import BoxTour from "./BoxTour/BoxTour";
import BoxService from "./BoxService/BoxService";

const Home = () => {
  return (
    <>
      <BoxAdventure />
      <BoxTour />
      <BoxService />
    </>
  );
};

export default Home;
