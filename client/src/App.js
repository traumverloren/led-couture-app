import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import umbrella from "./assets/animated-pixel-umbrella.gif";

const COLORS = [
  "#9400d3",
  "#0000ff",
  "#00ff00",
  "#ffff00",
  "#ff7f00",
  "#ff0000"
];

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
  padding: 10px 0;
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
  display: block;
  text-decoration: none;
  font-weight: 300;
  background: none;
  margin: 15px auto;
  border: none;
`;

const RainbowButton = Button.extend`
  cursor: url("rainbow.png") 32 32, pointer;
  font-size: 28px;
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

const rainbowAnimation = keyframes`
  16.7%{color: ${COLORS[0]};}
	33.4%{color: ${COLORS[1]};}
	50.1%{color: ${COLORS[2]};}
	66.8%{color: ${COLORS[3]};}
	83.5%{color: ${COLORS[4]};}
	100%{color: ${COLORS[5]};}
`;

const RainbowText = styled.span`
  font-family: "Press Start 2P";
  color: ${COLORS[0]};
  animation: ${rainbowAnimation} 5s infinite;
`;

const Line = styled.div`
  width: 60%;
  min-height: 2px;
  border-bottom: 2px dashed #000000;
  height: 2px;
  margin: 0px auto;

  @media (min-width: 769px) {
    margin: 30px auto;
  }
`;

const Footer = styled.footer`
  padding: 50px 0 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  margin: 0;

  @media (min-width: 420px) {
    font-size: 18px;
  }

  @media (min-width: 769px) {
    font-size: 22px;
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
            <div className="line" />
          </InstructionsContainer>
          <Line />
          <section>
            <RainbowButton>
              <RainbowText>RAINBOWS</RainbowText>
            </RainbowButton>
          </section>
        </Main>
        <Footer>
          <Text>
            Made & Worn with 💖 by <a href="https://stephanie.lol">Stephanie</a>
          </Text>
        </Footer>
      </Container>
    );
  }
}

export default App;
