import React from "react";
import styled from "styled-components";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;

export const Contain = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  background-color: ${(props) => props.theme.color.white};
`;
