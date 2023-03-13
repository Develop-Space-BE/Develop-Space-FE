import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { back, gear, mainLogo, spacesuit } from "../../asset/pic";

const Header = () => {
  const navigate: NavigateFunction = useNavigate();
  const url: string = window.location.pathname;
  if (url.includes("mainlist")) {
    return (
      <HeaderDiv>
        <img
          src={mainLogo}
          alt="메인로고"
          onClick={() => navigate("/mainlist")}
        />
        <img
          src={spacesuit}
          alt="마이페이지 버튼"
          onClick={() => navigate("/mypage/1")}
        />
      </HeaderDiv>
    );
  } else if (url.includes("mypage")) {
    return (
      <HeaderDiv2>
        <span>
          <img src={back} alt="뒤로가기" />
          <h3>마이페이지</h3>
          <img src={gear} alt="설정 버튼" />
        </span>
      </HeaderDiv2>
    );
  } else if (url.includes("setting")) {
    return (
      <HeaderDiv2>
        <span>
          <img src={back} alt="뒤로가기" />
          <h3>설정</h3>
          <div />
        </span>
      </HeaderDiv2>
    );
  } else {
    return (
      <HeaderDiv>
        <img src={back} alt="뒤로가기" />
        <img src="" alt="카테고리" />
        <img src={spacesuit} alt="마이페이지 버튼" />
      </HeaderDiv>
    );
  }
};

export default Header;

const HeaderDiv = styled.div`
  width: 90%;
  margin: 15% auto 10%;
  display: flex;
  justify-content: space-between;
`;

const HeaderDiv2 = styled.div`
  width: 100%;
  padding: 13% 0 0;
  background-color: ${(props) => props.theme.color.mypageBackGround};
  span {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 6%;
    background-color: ${(props) => props.theme.color.white};
  }
`;
