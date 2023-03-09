import React from "react";
import styled from "styled-components";

const MyView = () => {
  return <MyViewAll></MyViewAll>;
};

export default MyView;

const MyViewAll = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.color.mypageBackGround};
`;
