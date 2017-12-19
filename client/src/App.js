import React, { Component } from "react";
import styled from "styled-components";
import { rainbowShadow } from "./style-utils";
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

const ImageContainer = styled.div`
  padding: 10px 0 10px;
`;

const Image = styled.img`
  width: 40%;
  display: block;
  margin: 0 auto;
`;

const InstructionsContainer = styled.div`
  margin: 0;
  padding: 20px 0;
  font-size: 12px;
  font-family: "Press Start 2P", Helvetica, Arial, Verdana, sans-serif;
  text-align: center;
  line-height: 16px;

  @media (min-width: 420px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Button = styled.button`
  font-family: "Press Start 2P", Helvetica, Arial, Verdana, sans-serif;
  color: turquoise;
  animation: animated-rainbow-shadow 1s infinite;

  &:hover {
    color: darkturquoise;
  }
`;

const RainbowButton = Button.extend`
  display: block;
  font-size: 28px;
  text-decoration: none;
  font-weight: 300;
  background: none;
  margin: 15px auto;
  border: none;
  line-height: 36px;

  + button {
    padding: 15px;
  }

  @media (min-width: 420px) {
    font-size: 36px;
    line-height: 48px;
  }

  @media (min-width: 769px) {
    font-size: 48px;
    line-height: 66px;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Main>
          <Heading>Light My</Heading>
          <ImageContainer>
            <Image src={umbrella} />
          </ImageContainer>
          <InstructionsContainer>
            <p>Click on a program below</p>
            <p>& it will light my clothing!</p>
            <div class="line" />
          </InstructionsContainer>
          <section>
            <RainbowButton>
              <span>RAINBOWS</span>
            </RainbowButton>
          </section>
        </Main>
      </Container>
    );
  }
}

export default App;
