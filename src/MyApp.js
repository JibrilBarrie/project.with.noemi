import React from "react";

import Nav from "./Nav";
import FoodViolations from "./components/FoodViolations";
import Bronx from "./components/Bronx";
import Manhattan from "./components/Manhattan";

const MyApp = () => {
  return (
    <>
      <Nav />
      <FoodViolations />
      <Bronx />
      <Manhattan />
    </>
  );
};

export default MyApp;
