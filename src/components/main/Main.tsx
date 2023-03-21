import React from "react";
import styled from "styled-components";
import { backGround, google, kakao, logo } from "../../asset/pic";

const Main = () => {
  return (
    <>
      <Back src={backGround} alt="백그라운드" />
      <MainBox>
  <Logo>
    <img src={logo} alt="우주복" />
  </Logo>
  <Kakao>
  <img src={kakao} alt="카카오" />
  </Kakao>
  <Google>
  <img src={google} alt="구글" />
  </Google>
  <Admin>관리자 로그인</Admin>
  </MainBox>
    </>
    
  )
};

export default Main;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  width: 233px;
  height: 134px;
  margin-top: 235px;
  position: relative;
`

const Back = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`

const Kakao = styled.button`
  height: 49px;
  position: relative;
  border: none;
  border-radius: 15px;
  margin-top: 30px;
`

const Google = styled.button`
  height: 49px; 
  position: relative;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
`

const Admin = styled.button`
  font-size: 16px;
  margin-top: 20px;
  color: #C5C5C5;
  position: relative;
  border: none;
  border-bottom: 1px solid #C5C5C5;
  background-color: transparent;
`