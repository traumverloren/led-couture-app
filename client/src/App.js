import React, { Component } from "react";
import styled from "styled-components";
import umbrella from "./assets/animated-pixel-umbrella.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Heading = styled.h1`
  font-family: "Pacifico";
  padding: 10px;
  position: relative;
  text-align: center;
  margin: 0;
  transform: translateX(-60px);
  font-size: 28px;

  @media (min-width: 420px) {
    font-size: 36px;
    transform: translateX(-80px);
  }

  @media (min-width: 769px) {
    font-size: 60px;
    transform: translateX(-120px);
  }

  @media (min-width: 1440px) {
    transform: translateX(-140px);
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Main>
          <Heading>Light My</Heading>
          <img src={umbrella} />
        </Main>
      </Container>
    );
  }
}

export default App;
