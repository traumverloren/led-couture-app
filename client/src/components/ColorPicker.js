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
    "rgb(255, 0, 0)",
    "rgb(247, 141, 167)",
    "rgb(6, 147, 227)",
    "rgb(142, 209, 252)",
    "rgb(0, 208, 132)",
    "rgb(123, 220, 181)",
    "rgb(252, 185, 0)",
    "rgb(255, 105, 0)",
    "rgb(255, 255, 255)",
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
