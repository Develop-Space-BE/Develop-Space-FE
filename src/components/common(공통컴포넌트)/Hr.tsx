import React from "react";
import styled from "styled-components";

const Hr = () => {
  return <HrLine />;
};

export default Hr;

const HrLine = styled.hr`
  height: 1%;
  background-color: ${(props) => props.theme.color.transparent};
  border: transparent;
`;
