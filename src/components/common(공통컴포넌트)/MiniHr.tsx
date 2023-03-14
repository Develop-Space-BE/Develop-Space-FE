import React from "react";
import styled from "styled-components";

const MiniHr = () => {
  return <MiniHrLine />;
};

export default MiniHr;

const MiniHrLine = styled.hr`
  height: 1px;
  background-color: ${(props) => props.theme.color.lightGray};
  border: transparent;
`;
