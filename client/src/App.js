import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import ColorPicker from "./components/ColorPicker";
import umbrella from "./assets/animated-pixel-umbrella.gif";
import client from "./mqtt-client";

const COLORS = [
  "#9400d3",
  "#0000ff",
  "#00ff00",
  "#ffff00",
  "#ff7f00",
  "#ff0000"
];

const slideDown = keyframes`
  0%, 100% { transform: translateY(-50px); }
  10%, 90% { transform: translateY(0px); }
`;

const Alert = styled.div`
   {
    background-color: MediumSeaGreen;
    font-family: "Pacifico", monospace;
    font-size: 24px;
    position: fixed;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 2;
    overflow: hidden;
    transform: translateY(-50px);
    animation: ${slideDown} 2.5s 1s 1 ease forwards;
  }
`;

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

const topToBottom = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 0;
    transform: translateY(-50px);
  }
  10% {
    opacity: 1;
    transform: translateY(0px);
  }
  25% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 0;
    transform: translateY(50px);
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const SlidingVertical = styled.div`
  display: inline;
  text-indent: 10px;

  @media (min-width: 769px) {
    text-indent: 12px;
  }

  span {
    opacity: 0;
    position: absolute;
    padding-right: 5px;
    overflow: visible;
    color: ${COLORS[0]};
    animation: ${topToBottom} 12.5s linear infinite 0s;
  }

  span:nth-child(2) {
    color: ${COLORS[1]};
    animation-delay: 2.5s;
  }

  span:nth-child(3) {
    color: ${COLORS[2]};
    animation-delay: 5s;
  }

  span:nth-child(4) {
    color: ${COLORS[4]};
    animation-delay: 7.5s;
  }

  span:nth-child(5) {
    color: ${COLORS[5]};
    animation-delay: 10s;
  }
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
  width: 30%;
  display: block;
  margin: 0 auto;
`;

const ColorSelection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
`;

const InstructionsContainer = styled.div`
  margin: 0;
  padding: 5px 0;
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
  padding: 0;
`;

const FadeButton = Button.extend`
  font-family: "Press Start 2P", Helvetica, Arial, Verdana, sans-serif;
  cursor: url(${process.env.PUBLIC_URL}/rainbow.png) 32 32, pointer;
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
    text-shadow:  0 0 0px #FFDD1B,
                  0 0 2px #FFDD1B,
                  0 0 4px #FFDD1B,
                  0 0 6px rgb(214, 154, 24),
                  0 0 8px rgb(214, 154, 24),
                  0 0 13px rgb(214, 154, 24),
                  0 0 17px rgb(214, 154, 24),
                  0 0 20px rgb(214, 154, 24);
  }
  to {
    text-shadow:  0 0 1px rgb(214, 154, 24),
                  0 0 2px rgb(214, 154, 24),
                  0 0 4px rgb(214, 154, 24),
                  0 0 6px #FFDD1B,
                  0 0 7px #FFDD1B,
                  0 0 10px #FFDD1B,
                  0 0 12px #FFDD1B,
                  0 0 14px #FFDD1B;
  }
`;

const FadeText = styled.span`
  padding-bottom: 10px;
  color: ${COLORS[0]};
  animation: ${rainbowAnimation} 4s infinite;

  &:hover {
    animation: ${rainbowAnimation} 0.4s infinite;
  }
`;

const SnakeButton = Button.extend`
  font-family: "Monoton", Helvetica, Arial, Verdana, sans-serif;
  color: #019119;
  cursor: url(${process.env.PUBLIC_URL}/snake.png) 32 32, pointer;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  padding: 0px;

  span {
    padding-bottom: 10px;
  }

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
  cursor: url(${process.env.PUBLIC_URL}/rainbowraincloud.png) 32 32, pointer;
  font-size: 32px;
  line-height: 40px;
  color: cornflowerblue;

  &:hover {
    color: blue;
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
  font-family: "Bungee Inline";
  text-shadow: 0 0 10px gold;
  cursor: url(${process.env.PUBLIC_URL}/sparkle.png) 32 32, pointer;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin: 0px auto;

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
  animation: ${neon} 1s ease-in-out infinite alternate;

  &:hover {
    color: lemonChiffon;
  }
`;

const Line = styled.div`
  width: 95%;
  min-height: 2px;
  border-bottom: 2px dashed #000000;
  height: 2px;
  margin: 5px auto;

  @media (min-width: 768px) {
    width: 60%;
    margin: 15px auto;
  }
`;

const Footer = styled.footer`
  padding: 20px 0 10px;
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
  constructor(props) {
    super(props);
    this.state = { colorSelected: "255, 0, 0", isSubmitted: false };

    client.on("connect", () => {
      client.on("message", function(topic, message) {});

      client.on("error", error => {
        console.log("ERROR: ", error);
      });

      client.on("offline", () => {
        // console.log("offline");
      });

      client.on("disconnect", () => {
        // console.log("disconnect");
      });

      client.on("reconnect", () => {
        // console.log("reconnect");
      });
    });
  }

  sendEvent = program => {
    client.publish("lights", `${program}, ${this.state.colorSelected}`);
    this.setState({ isSubmitted: true });
    window.setTimeout(() => {
      this.setState({
        isSubmitted: false
      });
    }, 3500);
  };

  handleClick = color => {
    this.setState({ colorSelected: color });
  };

  render() {
    let alert;
    if (this.state.isSubmitted) {
      alert = <Alert role="alert">✨ Color program sent! ✨</Alert>;
    }

    return (
      <div>
        {alert}
        <Container>
          <Main>
            <Heading>
              Light My
              <SlidingVertical>
                <span>Clothes</span>
                <span>Skirt</span>
                <span>Necklace</span>
                <span>Stuff</span>
                <span>Umbrella</span>
              </SlidingVertical>
            </Heading>
            <ImageContainer>
              <Image src={umbrella} />
            </ImageContainer>
            <InstructionsContainer>
              <p>Pick a color,</p>
              <p>select a program,</p>
              <p>& light my clothing!</p>
            </InstructionsContainer>
            <Line />
            <ColorSelection>
              <ColorPicker
                colorSelected={this.state.colorSelected}
                handleClick={this.handleClick}
              />
            </ColorSelection>
            <Line />
            <section>
              <FadeButton onClick={() => this.sendEvent("fade")}>
                <FadeText>FADE</FadeText>
              </FadeButton>
              <SnakeButton onClick={() => this.sendEvent("snake")}>
                <span>SNAKE</span>
              </SnakeButton>
              <RainButton onClick={() => this.sendEvent("rain")}>
                <span>Rain</span>
              </RainButton>
              <SparkleButton onClick={() => this.sendEvent("sparkle")}>
                <SparkleText>Sparkle</SparkleText>
              </SparkleButton>
            </section>
          </Main>
          <Footer>
            <Text>
              Made & Worn with{" "}
              <span role="img" aria-label="heart emoji">
                💖
              </span>{" "}
              by <a href="https://stephanie.lol">Stephanie</a>
            </Text>
          </Footer>
        </Container>
      </div>
    );
  }
}

export default App;
