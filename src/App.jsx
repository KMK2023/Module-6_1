// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import Greeting from "./Greeting";
import AllLocs from "./AllLocs";
// import SingleLoc from "./AllLocs";
import Calculator from "./Calculator";

import Places from "./Places";
// import "./App.css";

function App() {
  return (
    <>
      <Greeting />
      <Calculator />
 
      <Places />
      {/* <SingleLoc /> */}
      <AllLocs/>
    </>
  );
}

export default App;
