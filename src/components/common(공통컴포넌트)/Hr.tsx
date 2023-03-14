import React from "react";
import styled from "styled-components";

const Hr = () => {
  return <HrLine />;
};

export default Hr;

const HrLine = styled.hr`
  height: 15px;
  background-color: ${(props) => props.theme.color.mypageBackGround};
  border: transparent;
`;
