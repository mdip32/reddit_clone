import React from "react";
import GlobalStyles from "../globalStyles";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
        <Navbar />
        <fieldset style={{ height: "1000px" }}></fieldset>
    </React.Fragment>
  );
}

export default App;
