import React from "react";
import styled from "styled-components";
import ColorItem from "./ColorItem";

const ColorGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ColorPicker = ({ colorSelected, handleClick }) => {
  const colors = [
    "255, 0, 0",
    "255, 105, 0",
    "255, 255, 0",
    "0, 255, 0",
    "0, 255, 250",
    "0, 0, 255",
    "131, 0, 255",
    "255, 0, 255",
    "255, 255, 255",
    "rainbow"
  ];
  const colorList = colors.map((color, index) => (
    <ColorItem
      key={index}
      color={color}
      handleClick={handleClick}
      isSelected={color === colorSelected}
    />
  ));

  return <ColorGroup>{colorList}</ColorGroup>;
};

export default ColorPicker;
