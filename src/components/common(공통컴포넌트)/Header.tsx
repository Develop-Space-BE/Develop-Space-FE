import React from "react";
import styled from "styled-components";
import { mainLogo, spacesuit } from "../../asset/pic";

const Header = () => {
  return (
    <HeaderDiv>
      <img src={mainLogo} alt="메인로고" />
      <img src={spacesuit} alt="마이페이지 버튼" />
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  width: 80%;
  margin: 15% auto 5%;
  display: flex;
  justify-content: space-between;
`;
