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
  display: block;
  text-decoration: none;
  font-weight: 300;
  background: none;
  margin: 10px auto;
  border: none;
`;

const RainbowButton = Button.extend`
  font-family: "Press Start 2P", Helvetica, Arial, Verdana, sans-serif;
  cursor: url("rainbow.png") 32 32, pointer;
  font-size: 28px;
  line-height: 36px;
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

const neon = keyframes`
  from {
    text-shadow:  0 0 10px #FFDD1B,
                  0 0 20px #FFDD1B,
                  0 0 30px #FFDD1B,
                  0 0 40px  rgb(214, 154, 24),
                  0 0 70px  rgb(214, 154, 24),
                  0 0 80px  rgb(214, 154, 24),
                  0 0 100px rgb(214, 154, 24),
                  0 0 150px rgb(214, 154, 24);
  }
  to {
    text-shadow:  0 0 5px rgb(214, 154, 24),
                  0 0 10px rgb(214, 154, 24),
                  0 0 15px rgb(214, 154, 24),
                  0 0 20px #FFDD1B,
                  0 0 35px #FFDD1B,
                  0 0 40px #FFDD1B,
                  0 0 50px #FFDD1B,
                  0 0 75px #FFDD1B;
  }`;

const RainbowText = styled.span`
  color: ${COLORS[0]};
  animation: ${rainbowAnimation} 4s infinite;

  &:hover {
    animation: ${rainbowAnimation} 0.4s infinite;
  }
`;

const SnakeButton = Button.extend`
  font-family: "Monoton", Helvetica, Arial, Verdana, sans-serif;
  color: #019119;
  cursor: url("snake.png") 32 32, pointer;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding: 0px;

  &:hover {
    text-shadow: 10px 10px 0 red;
  }

  @media (min-width: 420px) {
    font-size: 40px;
    line-height: 45px;
  }

  @media (min-width: 769px) {
    font-size: 56px;
    line-height: 72px;
  }
`;

const RainButton = Button.extend`
  font-family: "Nosifer", Helvetica, Arial, Verdana, sans-serif;
  color: #0000ff;
  cursor: url("raincloud.png") 32 32, pointer;
  font-size: 32px;
  line-height: 40px;
  padding: 0px;

  &:hover {
    color: lightSkyBlue;
  }

  @media (min-width: 420px) {
    font-size: 40px;
    line-height: 45px;
  }

  @media (min-width: 769px) {
    font-size: 56px;
    line-height: 72px;
  }
`;

const RainbowRainButton = Button.extend`
  font-family: "Nosifer", Helvetica, Arial, Verdana, sans-serif;
  cursor: url("rainbowraincloud.png") 32 32, pointer;
  font-size: 26px;
  line-height: 40px;
  padding: 0 0 15px;
  color: darkblue;
  text-shadow: 0 1px 0 #fb4236, 0 2px 0 #fb4236, 0 3px 0 #fb4236,
    0 4px 0 #ff6b01, 0 5px 0 #ff6b01, 0 6px 0 #ff6b01, 0 7px 0 #fdc741,
    0 8px 0 #fdc741, 0 9px 0 #fdc741, 0 10px 0 #25ce7b, 0 11px 0 #25ce7b,
    0 12px 0 #25ce7b, 0 13px 0 #01b3e3, 0 14px 0 #01b3e3, 0 15px 0 #01b3e3,
    0 16px 0 #da38b5, 0 17px 0 #da38b5, 0 18px 0 #da38b5;
  /* Pride Rainbow Text CSS found at TypographyCSS.com
  - by kevinhauger.com */

  &:hover {
    color: pink;
  }

  @media (min-width: 420px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (min-width: 769px) {
    font-size: 50px;
    line-height: 68px;
  }
`;

const SparkleButton = Button.extend`
  font-family: "Bungee";
  text-shadow: 0 0 10px gold;
  cursor: url("sparkle.png") 32 32, pointer;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding: 0px;

  &:hover {
    color: rgb(214, 154, 24);
    text-shadow: 0 0 20px gold;
  }

  @media (min-width: 420px) {
    font-size: 40px;
    line-height: 45px;
  }

  @media (min-width: 769px) {
    font-size: 56px;
    line-height: 72px;
  }
`;

const SparkleText = styled.p`
  color: #ffffff;
  transition: all 0.5s;
  animation: ${neon} 1.5s ease-in-out infinite alternate;

  &:hover {
    color: lemonChiffon;
  }
`;

const Line = styled.div`
  width: 60%;
  min-height: 2px;
  border-bottom: 2px dashed #000000;
  height: 2px;
  margin: 5px auto;

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
            <SnakeButton>
              <span>SNAKE</span>
            </SnakeButton>
            <RainButton>
              <span>Rain</span>
            </RainButton>
            <RainbowRainButton>
              <span>Rainbow Rain</span>
            </RainbowRainButton>
            <SparkleButton>
              <SparkleText>Sparkle</SparkleText>
            </SparkleButton>
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
