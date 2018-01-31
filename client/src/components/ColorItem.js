import React from "react";
import styled from "styled-components";
import rainbow from "../assets/rainbow-square.jpg";

const Swatch = styled.div`
  box-sizing: border-box;
  display: inline;
  background: ${props =>
    props.color === "rainbow" ? `url(${rainbow})` : props.color};
  background-size: cover;
  width: 30px;
  height: 30px;
  border: ${props =>
    props.isSelected === true ? "3px solid black" : "1px solid lightgrey"};
  margin: 0 3px 3px;
`;

const ColorItem = ({ color, handleClick, isSelected }) => {
  const handleClickEvent = () => {
    handleClick(color);
  };

  return (
    <Swatch color={color} onClick={handleClickEvent} isSelected={isSelected} />
  );
};

export default ColorItem;
