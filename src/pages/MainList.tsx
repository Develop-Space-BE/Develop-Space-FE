import React from "react";
import styled from "styled-components";
import Header from "../components/common(공통컴포넌트)/Header";
import List from "../components/list/List";

const MainList = () => {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  );
};

export default MainList;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: ${(props) => props.theme.color.white};
`;
