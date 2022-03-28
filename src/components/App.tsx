import React from "react";
import GlobalStyles from "../globalStyles";
import Navbar from "./Navbar/Navbar";
import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
        <Navbar />
        <Container>
        </Container>
    </React.Fragment>
  );
}

const Container = styled.section`
  background-color: #1a1a1bef;
  width: 100%;
  height: 100vh
`

export default App;
