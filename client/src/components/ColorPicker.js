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
    "#ff0000",
    "#F78DA7",
    "#0693E3",
    "#8ED1FC",
    "#00D084",
    "#7BDCB5",
    "#FCB900",
    "#FF6900",
    "#ffffff",
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
